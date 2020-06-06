const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjgwMzQwODUxNDI3Mzc3MTU2.Xk-e0A.cyJuFQ06gV3cKRG4lMCcdgeKVGc';

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
