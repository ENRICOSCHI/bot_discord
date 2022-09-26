module.exports = {
    name: 'say',
    description:' Say a message with the bot.',

    run:async(client,message,args) =>{
        let msg;
        let textchannel= message.metions.channels.first()
        message.delete()
        if(!message.member.permisssion.has('MANAGE_MESSAGES')){
            return   message.reply('**you do not have permission to use this command**')
        }else if(!args[0]){
            return message.reply('**please specify what you want to say!**')
        }else if(textchannel){
            msg=args.slice(1).join(' ');
            textchannel.send(msg)
        }else{
            msg = args.join(' ');
            message.channel.send(msg)
        }
    }
}  