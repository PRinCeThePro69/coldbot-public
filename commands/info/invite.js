const { MessageEmbed } = require('discord.js')
module.exports = {
  category: 'Info',
  description: 'The command to get the bot invite link', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command | wanna bet

  
  callback: async ({ message: msg, client, prefix }) => {
  const invite = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Add me to your server!')
    .setDescription('Add me to your server from the following links.\n:link: [Required Permissions (Recommended)](https://discord.com/oauth2/authorize?client_id=1005052589978697749&scope=bot&permissions=139586530374)\n:link: [Admin permissions](https://discord.com/oauth2/authorize?client_id=1005052589978697749&scope=bot&permissions=8)')
    
   
    
    .setTimestamp()

    msg.channel.send(
      {embeds: [invite]}
    )
  },
}