require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js
const util = require('minecraft-server-util');
const Gamedig = require('gamedig');
token = process.env.token

const bot = new Discord.Client(); //create new bot
const prefix = "!";

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  status();
  interval = setInterval (function () {
    var channeltoedit = bot.channels.fetch("872612689665470464");
    var msgtoedit = msg.channeltoedit.fetch("872612689665470464-874711007530975272");
        
  }, 60); //every hour
});

async function status() {
    // Anarchy
    util.status('anarchy.nfcservers.tk') // port is default 25565
    .then((response) => {
        bot.user.setPresence({
            status: 'online',
            activity: {
                name: 'Anarchy - Players online: ' + response.onlinePlayers,
                type: 'PLAYING'
            }
        })
    })
    await sleep(10000);
    // CSGO: Auto BHOP
    Gamedig.query({
        type: 'csgo',
        host: 'csgo.nfcservers.tk'
    }).then((state) => {
        bot.user.setPresence({
            status: 'online',
            activity: {
                name: 'Auto BHOP - Players online: ' + state.raw.numplayers,
                type: 'PLAYING'
            }
        })
    }).catch((error) => {
        console.log("Server is offline");
    });
    await sleep(10000)
    // CSGO: No Spread
    Gamedig.query({
        type: 'csgo',
        host: 'csgo.nfcservers.tk',
        port: 27016
    }).then((state) => {
        bot.user.setPresence({
            status: 'online',
            activity: {
                name: 'No Spread - Players online: ' + state.raw.numplayers,
                type: 'PLAYING'
            }
        })
    }).catch((error) => {
        console.log("Server is offline");
    });
    await sleep(10000)
    // Restart
    status();
}

bot.on('message', msg => {
    command(msg);
});

function command(msg) {
    if (msg.content === prefix + 'help') {
        msg.channel.send('Coming Soon.');``
    }
    if (msg.content === prefix + 'status ' + 'anarchy') {
        Gamedig.query({
            type: 'csgo',
            host: 'csgo.nfcservers.tk'
        }).then((state) => {
            msg.channel.send(
                "**Anarchy**" + "\n" +
                "IP: " + state.connect + "\n" +
                "Host: " + state.name + "\n" +
                "Map: " + state.map + "\n" +
                "Version: " + status_version + "\n" +
                "Players: " + status_onlinePlayers + "\n" +
                "Max Players: " + status_maxPlayers
            )
        }).catch((error) => {
            console.log("Server is offline");
        });
        util.status('anarchy.nfcservers.tk') // port is default 25565
            .then((response) => {
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

    if (msg.content === prefix + 'status ' + 'autobhop') {
        Gamedig.query({
            type: 'csgo',
            host: 'csgo.nfcservers.tk'
        }).then((state) => {
            msg.channel.send(
                "**Auto Bhop**" + "\n" +
                "Host: " + state.connect + "\n" +
                "Name: " + state.name + "\n" +
                "Map: " + state.map + "\n" +
                "Ping: " + state.ping + "ms"
            )
        }).catch((error) => {
            console.log("Server is offline");
        });
    }

    if (msg.content === prefix + 'status ' + 'norecoil') {
        Gamedig.query({
            type: 'csgo',
            host: 'csgo.nfcservers.tk',
            port: 27016
        }).then((state) => {
            msg.channel.send(
                "**No Recoil**" + "\n" +
                "Host: " + state.connect + "\n" +
                "Name: " + state.name + "\n" +
                "Map: " + state.map + "\n" +
                "Ping: " + state.ping + "ms"
            )
        }).catch((error) => {
            console.log("Server is offline");
        });
    }

    if (msg.content === prefix + 'status') {
        msg.channel.send('Invalid command usage! Servers:\n!status anarchy')
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

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }  

//make sure this line is the last line
bot.login(token); //login bot using token