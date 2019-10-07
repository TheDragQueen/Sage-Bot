const Discord = require('discord.js');
const responses = require('./commands/responses.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: 'Lian: Type !gibs', type: 0 } });
});

 
client.on('message', message => {
    var response = responses.response(message.content);
    if (response == "dab"){
        message.channel.send("dab", {
            file: "https://i.imgur.com/dQrv8FF.png" // Or replace with FileOptions object
        });
    }

    if (response != null){
        message.channel.send(response);
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret