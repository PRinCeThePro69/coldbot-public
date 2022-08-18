const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { MessageEmbed } = require("discord.js")
function RNG(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
module.exports = {
  category: 'Economy',
  description: 'Bet some money - you either double it or lose it all', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command
  expectedArgs: '<amount>',
  minArgs: 1,
  maxArgs: 1,
  callback: async({ message, args }) => {
	  console.log("recieved")
	  if(!args.length == 1 || !args[0] || isNaN(args[0])) {
		  message.reply("Your arguments are invalid")
	  } else {
		  if(await db.get(`${message.author.id}_bal`) < args[0]) { message.reply("you cant gamble what you aint got ") } else {
		  console.log("valid")
		  const amount = args[0]
		  const winnings = amount * 2
		  await(db.sub(`${message.author.id}_bal`, amount))
		  const loses = RNG(1,2)
		  if(loses == 1) {
			  //no money L bozo
			  const suckstobeu = new MessageEmbed()
			  .setTitle("Aw man")
			  .setDescription(`You lost <:icons_money:1005234572914606120> ${amount}`)
			  .setColor("RED")

			  message.reply({embeds:[suckstobeu]})
		  } else {
			  await(db.add(`${message.author.id}_bal`, winnings))
			  const great = new MessageEmbed()
			  .setTitle("Well done")
			  .setDescription(`You won <:icons_money:1005234572914606120> ${winnings}`)
			  .setColor("GREEN")

			  message.reply({embeds:[great]})
		  }
		  
	  }
  }
}
}
