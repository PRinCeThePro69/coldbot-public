// sowwy i was trolling online trolling !!1111 fbi open up
module.exports = {
  category: 'Moderation',
  description: 'Kicks the person specified.', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command | wanna bet
  testOnly: true,
  guildOnly: true,

  minArgs: 1,
  maxArgs: -1,
  expectedArgs: '<user> <reason>',
  permissions: ['KICK_MEMBERS'], //err fix
  
  callback: async ({ message: msg, args, client }) => {
 const target = msg.mentions.members.first()
  args.shift();
    let reason = args.join('')
    if(!target) {
     msg.reply({content: "You need to mention a user to kick!"})
        return;
    };
  if (!reason) reason = 'No reason specified';
  if(!msg.guild.me.permissions.has('KICK_MEMBERS')) { 
    msg.reply({content: 'I need the `KICK_MEMBERS` permission to be able to kick the member. Please give me enough permissions to kick.'})
    return;
    
  }
    if(target.id === msg.author.id) {
      msg.reply({content: 'You can\'t kick yourself!'})
      return;
    }
    if(target.id === client.user.id) {
      msg.reply({content: 'You can\'t kick me!'})
      return;
    }
    if(!target.kickable) {
     msg.reply({content: "Couldn't kick the member. Please make sure the bot's role is higher than the specified member."})
      return;
    }
 await target.send({content: `You have been kicked from **${msg.guild.name}**!\n**Reason:** ${reason}`}).catch((e) => {console.log(e)})
   await   target.kick(reason).catch((e) => {
     if(e) {
       console.log(e).then(msg.reply(
      {content: "Couldn't kick the user due to an unexpected error. This has been sent to my developers!"}
    ))
     }
     })
    await msg.reply({content: `Successfully kicked **${target.user.tag}**. || \`${reason}\``})
      
  },
}