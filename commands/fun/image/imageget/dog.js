const { get } = require("axios")
const { MessageEmbed } = require("discord.js")
module.exports = {
  category: 'Image Getting',
  description: 'Goes on the internet and gets a picture of a dog!', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command | bet
  
  callback: ({ message }) => {
    get("https://some-random-api.ml/animal/dog").then(function (response) {
		const e = new MessageEmbed()
		.setTitle("Your dog!")
		.setDescription(`Dog fact: ${response.data.fact}`)
		.setImage(response.data.image)
		.setFooter("Delivered by some-random-api.ml!")

		message.reply({embeds:[e]})
	})
  },
}