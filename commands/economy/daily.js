const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { MessageEmbed } = require("discord.js")
module.exports = {
  category: 'Economy',
  description: 'Get your daily rewards!', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command
  cooldown: "24h",
  callback: async({ message, args }) => {
	  if(await db.get(`dailylastused_${message.author.id}`) <= 86400000) {
		  message.reply("dont be greedy")
	  }
	  const ok = new MessageEmbed()
	.setTitle("Your daily reward has been given!")
	.setDescription("You got <:icons_money:1005234572914606120> 25,000 for your daily reward!")
      await db.set(`dailylastused_${message.author.id}`, Date.now())
	  await db.add(`${message.author.id}_bal`, 25000)
	  message.reply({embeds:[ok]})
  },
}
