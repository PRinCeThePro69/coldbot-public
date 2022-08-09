const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { MessageEmbed } = require("discord.js")
module.exports = {
  category: 'Economy',
  description: 'Gets someone\'s balance', // Required for slash commands
  aliases: ['balance'],
  slash: false, // Create both a slash and legacy command
  minArgs: 0,
  maxArgs: 1,  
  callback: async({ message, args }) => {
    const target = message.mentions.members.first() || message.author

	var bal = await db.get(`${target.id}_bal`)
	const e = new MessageEmbed()
	.setTitle("Balance!")
	.setDescription(`${target.tag} has <:icons_money:1005234572914606120> ${bal}`)
	.setFooter("tbh i thought they had more lol")

	message.reply({
		embeds:[e]
	})
  },
}