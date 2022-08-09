const { MessageEmbed } = require('discord.js')
module.exports = {
  category: 'Info',
  description: 'The help command', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command | wanna bet

  
  callback: async ({ message: msg, client, prefix }) => {
  const helpcmd = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Help Menu')
    .setDescription('Displays all the commands of the bot.')
    .addField('Information Commands', '`invite`, `help`')
    .addField('Economy Commands', '`balance`, `beg`, `daily`, `share`')
    .addField('Fun Commands', '`cat`, `dog`, `rory`, `woody`')
    .addField('Giveaway Commands', '`giveaway-start`, `giveaway-end`, `giveaway-reroll`')
      .addField('Moderation Commands', '`ban`, `kick`')
    .setTimestamp()

    msg.channel.send(
      {embeds: [helpcmd]}
    )
  },
}