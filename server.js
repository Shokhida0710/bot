

import TelegramBot from "node-telegram-bot-api";
const TOKEN = '8204814513:AAFJU9_DXKFU7MklpYMd2_eS3NYaIUaz0k4'

const bot = new TelegramBot(TOKEN, { polling: true });
bot.on("message", function (msg) {

  const chatId = msg.chat.id;
  const firstName = msg.chat.first_name;
  const text = msg.text;

 
  console.log(msg);
  bot.sendMessage(chatId, `Xush kelipsiz!, ${firstName} 👋`, {
    reply_markup: {
      keyboard: [
        [{ text: "Boshlash 🔥"}],
        [{ text: "Menu 🍔"}, { text: "Sozlamalar ⚙️"}]
      ],
      resize_keyboard:true
    }
  })

});

console.log("Bot ishga tushdi..");

