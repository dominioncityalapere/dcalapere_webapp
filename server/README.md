# Server

This folder contains the backend logic for fetching and storing daily devotionals from Telegram and syncing them to Supabase.

## Features

- Connects to the Telegram API using Telethon.
- Extracts daily devotional messages from a Telegram channel.
- Saves devotionals to a Supabase table.
- Supports scheduled execution (e.g., via GitHub Actions).

## Setup

1. Clone the repository.

   ```bash
   git clone <your-repo-url>
   cd server
````

2. Install dependencies.

   ```bash
   pip install -r requirements.txt
   ```

3. Create a `.env` file in the root of this folder with the following variables:

   ```
   TG_API_ID=<your-telegram-api-id>
   TG_API_HASH=<your-telegram-api-hash>
   TG_SESSION=<your-telegram-session-string>
   SUPABASE_URL=<your-supabase-url>
   SUPABASE_KEY=<your-supabase-key>
   ```

4. Run the script manually.

   ```bash
   python FetchDailyDevotional.py
   ```

   This will fetch the latest devotional from the Telegram channel and save it to Supabase.

## GitHub Actions

A GitHub workflow is set up to run this script on a schedule. Check the `.github/workflows/telegram.yml` file for details on how often it runs.

## Troubleshooting

* Ensure all environment variables are set correctly.
* If the script fails, check the logs for any errors, especially in the Telegram fetching or Supabase insert steps.
* If your database uses row-level security, ensure the correct role or keys are used to allow insertions.

## Dependencies

* Python 3.x
* Telethon
* Supabase Python library
* dotenv

## License

This project is licensed under the MIT License.