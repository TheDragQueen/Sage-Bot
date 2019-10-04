const Discord = require('discord.js');
const client = new Discord.Client();

import replyGibs from 'commands/responses,js';

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'cs?') {

       message.reply('your mom gay');

        }
    else if (message.content === '!gibs') {

        message.reply('me my chicken tendies');
 
        }
     else if (message.content === '!gibs tendies') {

        message.reply('I sharted and farted everywhere');
 
        }
     else if (message.content === '!gibs milkies') {

        message.reply('m-mommy');
 
     }

    //  else if (message.content === 'test') {

    //     replyGibs(client);
 
    //  }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret