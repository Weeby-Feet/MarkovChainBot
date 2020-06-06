const Discord = require('discord.js');
const bot = new Discord.Client();

const token = require('./token.js').token;

var words = [1][1];

bot.on('ready', () => {
  console.log('Bot is ready to do some Markoving');
});

bot.on('message', message => {

});

function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.login(token);
