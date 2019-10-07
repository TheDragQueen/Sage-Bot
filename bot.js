const Discord = require('discord.js');
const responses = require('./commands/responses.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: 'Wrangling', type: 0 } });
});

 
client.on('message', message => {
    if (message.content === 'dab') {
        const attachment = new Discord.Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(`${message.author},`, attachment);
    }
    else{
        var response = responses.response(message.content);
    }
    if (response != null){
        message.channel.send(response);
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret