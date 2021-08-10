require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js
const status = require('minecraft-server-status');
token = process.env.token

const bot = new Discord.Client(); //create new bot
const prefix = "!";

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setPresence({
    status: 'online',
    activity: {
        name: 'with depression',
        type: 'STREAMING',
        url: 'https://www.twitch.tv/monstercat'
    }
})
});

bot.on('message', msg => {
    command(msg);
});

function command(msg) {
    if (msg.content === prefix + 'help') {
        msg.channel.send('Coming Soon.');
    }
}

//make sure this line is the last line
bot.login(token); //login bot using token