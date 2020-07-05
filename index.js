const Discord = require('discord.js');
const bot = new Discord.Client();

const token = require('./token.js').token;

const file = require('file-system');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


var chain = new Array();
// for(i = 0; i < chain.length; i++) {
//   chain[i] = new Array(10);
// }


bot.on('ready', () => {
  console.log('Bot is ready to do some Markoving');
  //Dummy array entry to ensure code knows the chain array is 2 dimensional and avoid not defined errors
  chain.push(new Array(""));

  //Ask the person running the bot if they would like to setup the bot's memory with a file
  readline.question(`Would you like the bot to learn some words from a file first? (y/n) `, (input) => {
    if(input == 'y') {
      learnFromFile();
      return;
    }
    console.log("Not learning from file");
    readline.close();
  })
});

bot.on('message', message => {

  if(message.author.bot) return;
  if(message.content.toLowerCase().includes("mark")) genText(message.channel);

  genChain(message.content);

});

//Function used for generating random numbers to determine which words to use
function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Function might not be needed
function expandArray(arr) {

}

function genChain(data) {

  var index;

  //Split the message words up into an array
  messageArr = data.split(" ");

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
      //Add word, and the trailing word to the chain
      chain.push(new Array(messageArr[i], messageArr[i+1]));
    }
    //Otherwise, add the trailing word since the current word is already in the chain
    else {
      chain[index].push(messageArr[i+1]);
    }

  }

  console.log(chain);
}

//Function for getting the bot to build a chain based on a file of sentences
function learnFromFile() {
  console.log("Opening file system...\n");

  file.readFile('dict.txt', 'utf8', function(err, data) {
    if(err) {
      throw err;
    }
    else {
      console.log("File read successfully");
      genChain(data);
    }
  })
}

//Function for generating output using the chain constructed above
function genText(channel) {
  var output = "";
  var row;
  var col;

  while(true) {

    row = randInt(chain.length);
    col = randInt(chain[row].length);

    var temp = chain[row][col];

    if(temp == undefined && output != "") {
      break;
    }
    else if(temp == undefined && output == "") {
      output += "";
    }
    else if(temp == "") {
      output += "";
    }
    else {
      output += temp + " ";
    }
  }
  //DEBUGGING
  // console.log("Output: " + output);
  // console.log("Row: " + row);
  // console.log("Col: " + col);

  channel.send(output);
}

bot.login(token);
