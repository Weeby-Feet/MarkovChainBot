const Discord = require('discord.js');
const bot = new Discord.Client();

const token = require('./token.js').token;


var chain = new Array();
// for(i = 0; i < chain.length; i++) {
//   chain[i] = new Array(10);
// }


bot.on('ready', () => {
  console.log('Bot is ready to do some Markoving');
  //Dummy array entry to ensure code knows the chain array is 2 dimensional
  chain.push(new Array("."));
});

bot.on('message', message => {

  var index;

  //Split the message words up into an array
  messageArr = message.content.split(" ");

  //Step through the array
  for(i = 0; i < messageArr.length; i++) {

    var contains = false;

    //Determine if the current word is already in the bot's memory
    for(j = 0; j < chain.length; j++) {
      if(chain[j][0] == messageArr[i]) {
        contains = true;
        index = j;
      }
    }

    //If not, add it
    if(contains == false) {
      //Add word
      chain.push(new Array(messageArr[i], messageArr[i+1]));
    }
    //Otherwise, add the trailing word since the current word is already in the chain
    else {
      chain[index].push(messageArr[i+1]);
    }

  }

  console.log(chain);

});

//Function used for generating random numbers to determine which words to use
function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Function might not be needed
function expandArray(arr) {

}

//Function for generating output using the chain constructed above
function genText() {

}

bot.login(token);
