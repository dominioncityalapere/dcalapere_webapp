import os
import json
import asyncio
from dotenv import load_dotenv
from telethon import TelegramClient
from telethon.sessions import StringSession

load_dotenv()

api_id = int(os.getenv("TG_API_ID"))
api_hash = os.getenv("TG_API_HASH")
session = os.getenv("TG_SESSION")

client = TelegramClient(StringSession(session), api_id, api_hash)

JSON_FILE = "data/messages.json"

def extract_devotional(messages):
    valid_devotional = None

      # start from newest
    for i in range(len(messages) - 1, -1, -1):
        msg = messages[i]
        
        if "DOMINION MANDATE DAILY DEVOTIONAL" in msg["text"]:
            combined_text = msg["text"]

            if i + 1 < len(messages):
                next_msg = messages[i + 1]["text"]

                if "DOMINION MANDATE DAILY DEVOTIONAL" not in next_msg:
                    combined_text += "\n\n" + next_msg

            valid_devotional = {
                "id": msg["id"],
                "text": combined_text
            }

            break

    return valid_devotional


async def fetch_and_save():
    messages = []

    try:
        async for message in client.iter_messages("dominionmandate1", limit=2):
            if message.text:
                messages.append({
                    "id": message.id,
                    "text": message.text
                })

        messages.reverse()

        devotional = extract_devotional(messages)

        if devotional:
            print(f"FOUND DEVOTIONAL: {devotional['id']}")

            with open(JSON_FILE, "w", encoding="utf-8") as f:
                json.dump([devotional], f, ensure_ascii=False, indent=2)

        else:
            print("NO DEVOTIONAL FOUND")

            if os.path.exists(JSON_FILE):
                print("KEEPING EXISTING FILE")

    except Exception as e:
        print("FETCH DD ERROR:", e)


async def fetch_dd_loop():
    await client.start()

    print("Fetch DD started...")

    while True:
        await fetch_and_save()
        await asyncio.sleep(300)


if __name__ == "__main__":
    asyncio.run(fetch_dd_loop())