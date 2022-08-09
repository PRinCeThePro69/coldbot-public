const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')

const { Intents } = DiscordJS

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})
const { GiveawaysManager } = require('discord-giveaways');
const manager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        embedColorEnd: '#000000',
        reaction: '🎉'
    }
});
client.gws = manager;
client.on('ready', () => {
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        messagesPath:path.join(__dirname, 'messages.json'),
        
        showWarns: true,
        delErrMsgCooldown: 30,
        ignoreBots: true,
        dbOptions: {
            keepAlive: true
        },
		    disabledDefaultCommands: [
          'requiredrole',
          'language',
          'command', 
          'channelonly',
          'help'
        ],
        testServers: "1005054185009598494",
        botOwners: ['593696963061481532', '689173890450194434'],
        mongoUri: process.env.mongo,
        debug: false
    })
        .setDefaultPrefix('>')
})

client.login(process.env.token)