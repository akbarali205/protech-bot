const TelegramBot = require('node-telegram-bot-api');

const token = '7479231874:AAGI9icXLjVX13DsPHG5eVjFMi6bxcqSuWA';
const bot = new TelegramBot(token, { polling: true });

bot.setMyCommands([
    {
        command: '/start',
        description: 'Botga xush kelibsiz'
    }
]);
const subscribe = {
    reply_markup: {
        inline_keyboard: [
            [{
                text: "Pro-Teach",
                url: "https://t.me/ProTeach_Uz"
            }]
        ]
    }
}

const channels = ['@ProTeach_Uz'];

async function checkSubscription(userId) {
    for (let channel of channels) {
      try {
        const member = await bot.getChatMember(channel, userId);
        if (member.status === 'left' || member.status === 'kicked') {
          return false;
        }
      } catch (error) {
          return false;
      }
    }
    return true;
  }

  const opts = {
      reply_markup: {
          inline_keyboard: [
              [
                  {
                      text: 'Web app!',
                      web_app: {url: 'https://proteach.uz/'},
                  },
              ],
          ],
      },
  };

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const isSubscribed = await checkSubscription(chatId);
    if(!isSubscribed) {
        return bot.sendMessage(chatId, "Siz kanalga obuna bo'lmadingiz!!!", subscribe);
    }

    bot.sendMessage(chatId, 'Salom! Tugmani bosing:', opts);
});
