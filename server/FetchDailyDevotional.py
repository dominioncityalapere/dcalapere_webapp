import os
import asyncio
from dotenv import load_dotenv
from telethon import TelegramClient
from telethon.sessions import StringSession
from supabase import create_client


load_dotenv()

# Telegram
api_id = os.getenv("TG_API_ID")

if not api_id:
    raise ValueError("TG_API_ID is missing")

api_id = int(api_id)

api_hash = os.getenv("TG_API_HASH")
session = os.getenv("TG_SESSION")

client = TelegramClient(StringSession(session), api_id, api_hash)

# Supabase
supabase = create_client(
    os.getenv("VITE_SUPABASE_URL"),
    os.getenv("VITE_SUPABASE_ANON_KEY")
)

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
                "telegram_id": msg["id"],
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
            print(f"FOUND DEVOTIONAL: {devotional['telegram_id']}")

            existing = (supabase
                        .table("devotionals")
                        .select("telegram_id")
                        .eq(
                            "telegram_id",
                            devotional["telegram_id"]
                        )
                        .execute()
                        )
            
            print(existing.data)

            if not existing.data:
                supabase.table("devotionals").insert({
                    "telegram_id": devotional["telegram_id"],
                    "text": devotional["text"]
                }).execute()

                print("Saved to Supabase")

            else:
                print("Already exists")

        else:
            print("No devotional found")

    except Exception as e:
        print("FETCH ERROR:", e)

async def main():
    await client.start()
    await fetch_and_save()
    await client.disconnect()

if __name__ == "__main__":
    asyncio.run(main())

# async def fetch_dd_loop():
#     await client.start()

#     print("Fetch DD started...")

#     while True:
#         await fetch_and_save()
#         await asyncio.sleep(300)


# if __name__ == "__main__":
#     asyncio.run(fetch_dd_loop())