const { MessageEmbed } = require('discord.js')
module.exports = {
  category: 'Info',
  description: 'The psa command', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command | wanna bet

  
  callback: async ({ message: msg, client, prefix }) => {
  const helpcmd = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('PSA')
    .setDescription('**THE BOT WILL BE UNSTABLE AND MAY NOT RESPOND TO ALL COMMAND WHILE I AM WORKING ON IT** - Deveroonie.')
    .setTimestamp()

    msg.channel.send(
      {embeds: [helpcmd]}
    )
  },
}
