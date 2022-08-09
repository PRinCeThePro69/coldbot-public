const ms = require("ms")
module.exports = {
  category: 'Giveaways',
  description: 'Starts a giveaway!', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command
  
  maxArgs: 4, //order: length winners prize channel
  permissions: ["MANAGE_MESSAGES"],
  callback: ({ message, args, client }) => {
	if(args.length > 4 || args.length <= 2 || isNaN(args[1])){
    message.reply("Your arguments are invalid! Use `>giveaway-start <duration> <winners> <prize> [<channel>]`") 
      return;
  }
	  const length = ms(args[0])
	  const winners = parseInt(args[1])
	  const prize = args[2]
	  const channel = message.mentions.channels.first() || message.channel
	  client.gws.start(channel, {
                duration: length,
                winnerCount: winners,
                prize: prize
            })
            .catch(err => {
				console.log(err)
			})
  },
}