const Discord = require('discord.js');
const bot = new Discord.Client();

const token = require('./token.js').token;

var words = [1][1];

bot.on('ready', () => {
  console.log('Bot is ready to do some Markoving');
});

bot.on('message', message => {

//Split the message words up into an array

//Step through the array

//Determine if the current word is already in the bot's memory

//If not, add it

});

//Function used for generating random numbers to determine which words to use
function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.login(token);
