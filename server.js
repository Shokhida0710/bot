import TelegramBot from "node-telegram-bot-api"
const TOKEN = '8204814513:AAFJU9_DXKFU7MklpYMd2_eS3NYaIUaz0k4'
const bot = new TelegramBot(TOKEN, { polling: true })

bot.on(`message`, function (msg) {
    const chatId = msg.chat.id;
    console.log(msg);
    bot.sendMessage(chatId, "Xush kelibsiz")
});

console.log("Bot is starting...");


