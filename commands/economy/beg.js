const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { people, regectionReasons } = require("../../config/beg.json")
function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}
function RNG(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const { MessageEmbed } = require("discord.js")
module.exports = {
  category: 'Economy',
  description: 'Easy money making command!', 
  
  slash: false, 
  cooldown: '30s',
  
  callback: async ({ message }) => {
    const person = getRandomItem(people)
	const amount = RNG(100, 1000)
	const makesAnything = RNG(1,3)

	if(makesAnything == 1) {
		const regectionReason = getRandomItem(regectionReasons)
		const regected = new MessageEmbed()
		.setTitle("no money 4 u")
		.setAuthor(person)
		.setDescription(regectionReason)

		message.reply({embeds:[regected]})
		
	} else {
		await db.add(`${message.author.id}_bal`, amount)
		const success = new MessageEmbed()
		.setTitle("lol money begging")
		.setAuthor(person)
		.setDescription(`You got <:icons_money:1005234572914606120> ${amount} from begging!`)

		message.reply({embeds:[success]})
	}
  },
}