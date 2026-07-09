import os
import asyncio
from dotenv import load_dotenv
from telethon import TelegramClient
from telethon.sessions import StringSession
from supabase import create_client

# Load environment variables from the .env file
load_dotenv()

# Telegram API credentials
api_id = os.getenv("TG_API_ID")

# Ensure the Telegram API ID is available
if not api_id:
    raise ValueError("TG_API_ID is missing")

api_id = int(api_id)

api_hash = os.getenv("TG_API_HASH")
session = os.getenv("TG_SESSION")

# Initialize the Telegram client using a saved session
client = TelegramClient(StringSession(session), api_id, api_hash)

# Initialize the Supabase client
supabase = create_client(
    os.getenv("VITE_SUPABASE_URL"),
    os.getenv("VITE_SUPABASE_SERVICE_ROLE_KEY")
)

# Extract the latest devotional from the fetched Telegram messages
def extract_devotional(messages):
    valid_devotional = None

      # Search from the newest message to the oldest
    for i in range(len(messages) - 1, -1, -1):
        msg = messages[i]
        
        # Identify the start of a devotional
        if "DOMINION MANDATE DAILY DEVOTIONAL" in msg["text"]:
            combined_text = msg["text"]

            # Combine the devotional header with the following message if it contains the continuation
            if i + 1 < len(messages):
                next_msg = messages[i + 1]["text"]

                if "DOMINION MANDATE DAILY DEVOTIONAL" not in next_msg:
                    combined_text += "\n\n" + next_msg

            valid_devotional = {
                "telegram_id": msg["id"],
                "text": combined_text
            }

            break

    # Return the extracted devotional and its Telegram message ID
    return valid_devotional

# Fetch the latest Telegram messages and store new devotionals in Supabase
async def fetch_and_save():
    # Store the latest messages fetched from Telegram
    messages = []

    try:
        # Retrieve the latest messages from the Telegram channel
        async for message in client.iter_messages("dominionmandate1", limit=2):
            if message.text:
                messages.append({
                    "id": message.id,
                    "text": message.text
                })

        # Restore chronological order before processing
        messages.reverse()

        # Extract the devotional from the fetched messages
        devotional = extract_devotional(messages)

        if devotional:
            print(f"FOUND DEVOTIONAL: {devotional['telegram_id']}")

            # Check whether the devotional already exists in the database
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

            # Save the devotional only if it does not already exist
            if not existing.data:
                supabase.table("devotionals").insert({
                    "telegram_id": devotional["telegram_id"],
                    "text": devotional["text"]
                }).execute()

                print("Saved to Supabase")

            # Skip duplicate devotionals
            else:
                print("Already exists")

        else:
            print("No devotional found")

    # Handle any unexpected errors during the fetch process
    except Exception as e:
        print("FETCH ERROR:", e)

async def main():
    await client.start()
    await fetch_and_save()
    await client.disconnect()

if __name__ == "__main__":
    asyncio.run(main())