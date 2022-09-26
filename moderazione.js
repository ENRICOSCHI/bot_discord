const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]}
)


client.login(process.env.token)

client.on("ready",() =>{
    console.log("Bot Online")
})


client.on("messageCreate", (message) =>{
    var parolacce=["cazzo", "merda","stronzo","fanculo","coglione","bimbominchia","porco", "dio", "madonna","negro"]
    var trovata= false;

    parolacce.forEach(parola =>{
        if(message.content.includes(parola)){
            trovata= true;
            testo=testo.replace(eval(`/${parola}/g`),"***");
        }
    })
    if(trovata){
        message.delete();
        var embed= new Discord.MessageEmbed()
            .setTitle("Hai detto una parola vietata nel server")
            .setDescription("Hai scritto una parola vietata")
        message.channel.send({embeds: [embed]})
    }
})