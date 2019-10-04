const Discord = require('discord.js');
const responses = require('./commands/responses.js');
const db = require('./database/db.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: 'Lian: Type !gibs', type: 0 } });
});

 
client.on('message', message => {
    if (message.content == "status"){
        message.reply(db.connect());
    }

    var response = responses.response(message.content);
    if (response != null){
        message.reply(response);
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret