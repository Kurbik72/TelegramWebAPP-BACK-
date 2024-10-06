const TelegramBot = require('node-telegram-bot-api');
const webAppUrl ="https://testweb72.netlify.app/"

const token = '7658612301:AAGnfbYvcEwPowDkDGla3VGsvsvdutv2Spw';


const bot = new TelegramBot(token, {polling: true});


bot.on('message', async(msg) => {

const chatId = msg.chat.id;
const text = msg.text;







if (text === '/start') {
    await bot.sendMessage(chatId,'Ниже появится кнопка, тыкни',{
        reply_markup:{
            inline_keyboard:[
                [{text: 'Заполнить форму', web_app: {url:webAppUrl}}]
            ]
        }
    })
}
});





