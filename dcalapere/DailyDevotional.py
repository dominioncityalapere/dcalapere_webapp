import os
import json
import asyncio
from dotenv import load_dotenv
from telethon import TelegramClient
from telethon.sessions import StringSession
from flask import Flask, jsonify
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)

api_id = os.getenv("TG_API_ID")
api_hash = os.getenv("TG_API_HASH")

session = os.getenv("TG_SESSION")

client = TelegramClient(
    StringSession(session),
    int(api_id),
    api_hash
)

loop = asyncio.new_event_loop()
asyncio.set_event_loop(loop)

loop.run_until_complete(client.start())

JSON_FILE = "messages.json"

async def fetch_messages():

    messages = []

    # We fetch 5 to make sure we find a full one even if there is "noise"
    async for message in client.iter_messages("dominionmandate1", limit=5):
        if message.text:
            messages.append({
                "id": message.id,
                "text": message.text
            })

     # Reverse so older -> newer
    messages.reverse()

    # LOGIC: Find messages that have Header
    valid_devotionals = None
    
    for i, msg in enumerate(messages):
        if "DOMINION MANDATE DAILY DEVOTIONAL" in msg["text"]:
            combined_text = msg["text"]

            # check next message for continuation
            if i + 1 < len(messages):
                next_msg = messages[i + 1]["text"]

                # If next message is NOT another devotional, treat it as continuation text
                if "DOMINION MANDATE DAILY DEVOTIONAL" not in next_msg:
                    combined_text += "\n\n" + next_msg
    
            valid_devotionals = {
                "id": msg["id"],
                "text": combined_text
            }

  # save latest valid devotional
    if valid_devotionals:
         # Take the most recent complete devotional or the combined devotional
        data_to_save = [valid_devotionals]

        with open(JSON_FILE, "w", encoding="utf-8") as file:
            json.dump(data_to_save, file, ensure_ascii=False, indent=2)

        return data_to_save
    
    # If no valid devotional found in last 10 posts, load the previous good one from the file.
    if os.path.exists(JSON_FILE):
        with open(JSON_FILE, "r", encoding="utf-8") as file:
            return json.load(file)
        
    return []


@app.route("/health")
def health():
    return {"status": "ok"}, 200

@app.route("/messages", methods=["GET"])
def get_messages():
    # check for new messages every time the page is refreshed
    asyncio.set_event_loop(loop)
    messages = loop.run_until_complete(fetch_messages())
    return jsonify(messages)

if __name__ == "__main__":
    app.run(port=5001, debug=True, use_reloader=False)