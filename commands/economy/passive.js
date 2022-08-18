const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { MessageEmbed } = require("discord.js")
module.exports = {
  category: 'Economy',
  description: 'Go passive!', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds
  callback: async({ message }) => {
	  if(await db.get(`${message.author.id}_passive`) != true) { //not passive
	  await db.set(`${message.author.id}_passive`, true)
		  const nowpassive = new MessageEmbed()
		  .setTitle("Passive")
		  .setDescription("You are now passive, you cannot be stolen from, but you cannot send or recieve coins.")

		  message.reply({embeds:[nowpassive]})
	  } else {
		  //are passive
		  await db.set(`${message.author.id}_passive`, false)
		  const notpassive = new MessageEmbed()
		  .setTitle("No longer passive")
		  		  .setDescription("You are no longer passive, you can be stolen from, but you can now send or recieve coins.")

		  message.reply({embeds:[notpassive]})

	  }
  }
}
