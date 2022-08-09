const { MessageEmbed } = require("discord.js")
const { get } = require("axios")
module.exports = {
  category: 'Image Getting',
  description: 'Goes on the internet and gets a picture of Woody!', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command
  minArgs: 0,
  maxArgs: 1,
  callback: ({ message, args }) => {
    var id;
	if(args.length != 0) {
		id = parseInt(args[0])
	} else {
		id = "random"
	}
  if(id == "random") {
	  get("https://woody.hplugweb.xyz/api/getrandom").then(function (response) {
		  const res = response.data
		  const random = new MessageEmbed()
		  .setTitle("Random Woody picture!")
		  .setDescription(`This picture was taken at ${res.takenat}\n${res.description}`)
		  .setImage(res.link)
		  .setFooter(`ID: ${res.id}`)

		  message.reply({embeds:[random]})
	  })
  } else {
	  get(`https://woody.hplugweb.xyz/api/get/${id}`).then(function (response) {
		  const res = response.data
		  const idget = new MessageEmbed()
		  .setTitle("Woody picture!")
		  .setDescription(`This picture was taken at ${res.takenat}\n${res.description}`)
		  .setImage(res.link)

		  message.reply({embeds:[idget]})
	  })
  }
  },
}