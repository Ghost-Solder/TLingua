import logging
from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update, WebAppInfo
from telegram.ext import ApplicationBuilder, ContextTypes, CommandHandler
import os
from dotenv import load_dotenv

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)


load_dotenv()

TOKEN = os.getenv('TELEGRAM_TOKEN')
WEB_APP_URL = os.getenv('WEB_APP_URL')


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Sends a photo with an inline button attached from local directory."""

    keyboard = [[
        InlineKeyboardButton("Let's GO!", web_app=WebAppInfo(url=WEB_APP_URL))
    ]]
    reply_markup = InlineKeyboardMarkup(keyboard)

    photo_path = 'images/start-message.png'

    with open(photo_path, 'rb') as photo_file:
        await context.bot.send_photo(
            chat_id=update.effective_chat.id,
            photo=photo_file,
            caption='Welcome to TLingua! 🎉🎉🎉\n\nAre you ready for a completely new language experience? 🥳',
            reply_markup=reply_markup,
        )


if __name__ == '__main__':
    application = ApplicationBuilder().token(TOKEN).build()

    start_handler = CommandHandler('start', start)
    application.add_handler(start_handler)

    # Run the bot until the user presses Ctrl-C
    application.run_polling(allowed_updates=Update.ALL_TYPES)
