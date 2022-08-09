const { MessageEmbed } = require("discord.js")
const { get } = require("axios")
module.exports = {
  category: 'Image Getting',
  description: 'Goes on the internet and gets a picture of Rory!', // Required for slash commands
  
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
	  get("https://rory.cat/purr").then(function (response) {
		  const res = response.data
		  const random = new MessageEmbed()
		  .setTitle("Random Rory picture!")
		  .setImage(res.url)
		  .setFooter(`ID: ${res.id}`)

		  message.reply({embeds:[random]})
	  })
  } else {
	  get(`https://rory.cat/purr/${id}`).then(function (response) {
		  const res = response.data
		  const idget = new MessageEmbed()
		  .setTitle("Rory picture!")
      
		  .setImage(res.url)

		  message.reply({embeds:[idget]})
	  })
  }
  },
}