require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js
token = process.env.token

const client = new Discord.Client(); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//make sure this line is the last line
client.login(token); //login bot using token