// sowwy i was trolling online trolling !!1111 fbi open up
module.exports = {
  category: 'Moderation',
  description: 'Bans the person specified.', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command | wanna bet
  testOnly: true,
  guildOnly: true,

  minArgs: 1,
  maxArgs: -1,
  expectedArgs: '<user> <reason>',
  permissions: ['BAN_MEMBERS'], //err fix
  
  callback: async ({ message: msg, client, prefix }) => {
    const args = msg.content.slice(prefix.length).trim().split(' ');
 const target = msg.mentions.members.first()
  
    if(!target) {
     msg.reply({content: "You need to mention a user to ban!"})
        return;
    };
    
    let reason = args.slice(1).join(" ")
  if (!reason) reason = 'No reason specified';
  if(!msg.guild.me.permissions.has('BAN_MEMBERS')) { 
    msg.reply({content: 'I need the `BAN_MEMBERS` permission to be able to ban the member. Please give me enough permissions to ban.'})
    return;
    
  }
    if(target.id === msg.author.id) {
      msg.reply({content: 'You can\'t ban yourself!'})
      return;
    }
    if(target.id === client.user.id) {
      msg.reply({content: 'You can\'t ban me!'})
      return;
    }
    if(!target.kickable) {
     msg.reply({content: "Couldn't ban the member. Please make sure the bot's role is higher than the specified member."})
      return;
    }
 await target.send({content: `You have been banned in **${msg.guild.name}**!\n**Reason:** ${reason}`}).catch((e) => {console.log(e)})
   await   target.ban({reason}).catch((e) => {
     if(e) {
       console.log(e).then(msg.reply(
      {content: "Couldn't ban the user due to an unexpected error. This has been sent to my developers!"}
    ))
     }
     })
    await msg.reply({content: `Successfully banned **${target.user.tag}**. || \`${reason}\``})
      
  },
}