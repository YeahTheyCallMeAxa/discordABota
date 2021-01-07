const Discord = require('discord.js') //Load up the Discord.js Library
const client = new Discord.Client() //Define a way to mention our bot
const settings = { // your bot's token and prefix is defined here
    token: require('./config.json').bot_token, // token
    prefix: require('./config.json').bot_prefix // prefix
}

client.on('ready', () => { // new ready event
client.user.setActivity(`bit.ly/invmikio | discord.gg/nou`, { type: 'WATCHING' }); // set the bot's activity
console.log([`Hello! I'm on in ${client.guilds.cache.size} servers, with ${client.users.cache.size} members!`,
`This bot is coded by Axa!`,
`For more information, go to https://github.com/YeahTheyCallMeAxa/discordABota`,
`Thank you for using this bot!`,
`- ${client.user.tag}`
].join('\n')); //console.logs stuff ig
});

client.on('message', async message => { //new event
    if(message.author.bot) return;
    if(!message.content.startsWith(settings.prefix)) return;
    if(message.content === `${settings.prefix}ping`){
        return message.channel.send(`Pong!`)
    }
    if(message.content === `${settings.prefix}reactme`){
        const emojis = [ 
            '🐃',
            '🍉',
            '💅',
            '🌺',
            '🧡',
            '😄',
            '🤡'
        ]
        let emoji = emojis[Math.floor(Math.random() * emojis.length)]
        const msg = await message.channel.send(`WAIT!`)
        msg.delete()
        await message.react(emoji)

        
    }
    /* You can add a new command with:
    if(message.content === `${settings.prefix}test`){

        return message.channel.send(`This is just testing!`)
    }
    */

});



client.login(settings.token) //login to your client using the token!