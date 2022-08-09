const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { MessageEmbed } = require("discord.js")
module.exports = {
  category: 'Economy',
  description: 'Give someone some of your coins!', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds
  expectedArgs: '<user> <amount>',
  minArgs: 2,
  maxArgs: 2,
  callback: async({ message, args }) => {
	  const target = message.mentions.members.first()
	  if(args.length == 0 || !target || isNaN(args[1])) {
		  message.reply("Your arguments are invalid")
	  } else {
		  const amount = parseInt(args[1])
   //hold up, do you even have the money?!
	  if(await db.get(`${message.author.id}_bal`) <= amount) {
		  message.reply("You have to have that money, we don't belive in duplication here.")
	  } else {
		  //seems legit
		  await db.sub(`${message.author.id}_bal`, amount)
		  await db.add(`${target.id}_bal`, amount)
		  const yesmate = new MessageEmbed()
		  .setTitle("Success")
		  .setDescription(`You gave ${target.user.tag} <:icons_money:1005234572914606120> ${amount}`)
		  .setColor("GREEN")

		  message.reply({embeds:[yesmate]}) //pog they are informed
	  }
  }
},
}