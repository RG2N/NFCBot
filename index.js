require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js
const util = require('minecraft-server-util');
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
    if (msg.content === prefix + 'status') {
        util.status('anarchy.nfcservers.tk') // port is default 25565
            .then((response) => {
                console.log(response);
                const status_host = response.host;
                const status_port = response.port;
                const status_version = response.version;
                const status_onlinePlayers = response.onlinePlayers;
                const status_maxPlayers = response.maxPlayers;
                const status_description = response.description.descriptionText;
                msg.channel.send(
                    "**Anarchy**" + "\n" +
                    "Host: " + status_host + "\n" +
                    "Port: " + status_port + "\n" +
                    "Version: " + status_version + "\n" +
                    "Players: " + status_onlinePlayers + "\n" +
                    "Max Players: " + status_maxPlayers
                )
            })
            .catch((error) => {
                console.error(error);
            });
    }
    if (msg.content === prefix + 'status' + 'anarchy') {
        
    }
}

function getStatus(SERVER_ADDRESS, SERVER_PORT) {
    return util.status(SERVER_ADDRESS, { port: SERVER_PORT })
        .then(res => {
            data = res;
            lastUpdated = Date.now();
            return data;
        })
}

//make sure this line is the last line
bot.login(token); //login bot using token