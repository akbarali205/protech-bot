const TelegramBot = require('node-telegram-bot-api');

const token = '7479231874:AAGI9icXLjVX13DsPHG5eVjFMi6bxcqSuWA';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    const opts = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Web Appni Ocha olish',
                        url: 'https://proteach.uz/',
                    },
                ],
            ],
        },
    };

    bot.sendMessage(chatId, 'Salom! Tugmani bosing:', opts);
});
