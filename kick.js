/*const {MessageEmbed} = require('dicord.js');
const db = require('quick.db');

module.exports = {
    name:'warn',
    description: 'warn a user for some reason.',
    run:async(client,message,args) =>{
        if(!message.member.permission.has("MANAGE_MEBERS")) return message.reply({content: "**YOU DON'T HAVE PERMISSION TO USE THIS COMMAND**"})
        
        let user= message.mentions.members.first() || client.users.cache.get(args[0]);//mention a member to warn or warn the member by their user ID
        let reason = args.slice(1).join(' ')  

        if (!user) return message.reply({content: "Please specify a valid user to warn! "});
        
        let ember = new MessageEmbed()
        .setAuthor({ name: message.author.tag, iconURL: user.displayAvatarURL({ dynamic: true })})
        .setDescription(`{message.author} warned ${user} \n\n Reason: ${reason? reason: 'no reason provided'}`)
        .setTimestamp()
        .setFooter({text:`${user.tag || user.user.tag}`,iconURL: user.displayAvatarURL({dynamic: true}) || user.user.displayAvatarURL({dynamic:true})})
        message.reply({embeds: [embed]}).then(()=>{
            db.add(`warns_${user.id}`,1)//add one warning to database
            let dm = new MessageEmbed()
            .setDescription(`you were warned by ${message.author}\n\n Reason: ${reason ? reason : 'No reason provided'}`)
            .setTimestamp()
            user.send({embed: [embed]})//send a dm to the user that get warned
        });
    }
};*/