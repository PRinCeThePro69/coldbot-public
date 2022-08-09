const ms = require("ms")
module.exports = {
  category: 'Giveaways',
  description: 'Ends a running giveaway!', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command
  
  maxArgs: 2, //order: length winners prize channel
  permissions: ["MANAGE_MESSAGES"],
  callback: ({ message, args, client }) => {


	  const msgId = args[0]
  if(!msgId) {
    message.reply('You need to provide a giveaway message ID!')
    return
  }

	  client.gws.end(msgId)
            .catch(err => {
				console.log(err);
      message.reply(`An error has occurred, please check and try again.\n\`${err}\``);
			})
  },
}