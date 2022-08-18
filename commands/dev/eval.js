const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { MessageEmbed } = require('discord.js')
module.exports = {
  category: 'Dev only',
  description: 'Code', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command | wanna bet
  minArgs: 1,
  maxArgs: 99999999999999999999999,
  
  callback: async({ message: msg, client, args }) => {
	  if(!["689173890450194434", "593696963061481532"].includes(msg.author.id)) return msg.reply("no :x:")
   try {
      // Evaluate (execute) our input
      const evaled = eval(args.join(" "));

    } catch (err) {
      // Reply in the channel with our error
      msg.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
    }
  },
}
