const Discord = require("discord.js")
const { MembershipStates } = require("discord.js/typings/enums")
const client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]}
)
/*const {MessageEmbed} = require('dicord.js');
const db = require('quick.db');*/

client.login(process.env.token)

client.on("ready",() =>{
    console.log("Bot Online")
})


client.on("messageCreate", (message) => {
   if(message.content == "!youtube"){
    message.channel.send("Il mio canale youtube: https://www.youtube.com/channel/UC-DzoW_FlAfbGyJgBK6PCHw")
   }
   if(message.content == "!twitch"){
    message.channel.send("Il mio canale twitch: https://www.twitch.tv/enrycon")
   }
   if(message.content == "!twitter"){
    message.channel.send("Il mio account twitter: https://twitter.com/ENRICOSCHI")
   }
   if(message.content == "!scratch"){
    message.channel.send("EHI! lo sapevi che ho creato dei giochi su scratch quando andavo alle medie? beh ora si; clicca qui per vedere le mie creazioni: https://scratch.mit.edu/users/enry234m/")
   }
   if(message.content == "ping!"){
    message.channel.send("pong!")
   }
   /*if(message.content == "cazzo" || message.content=="Cazzo"|| message.content=="CAZZO"){
    message.channel.send("ATTENZIONE NON SI DICONO PAROLACCE!!")*/
})

//moderazione
client.on("messageCreate", (message) =>{
    var parolacce=["cazzo", "merda","stronzo","fanculo","coglione","bimbominchia","porco", "dio", "madonna","negro"]
     var trovata= false;
     var testo = message.content;
 
     parolacce.forEach(parola =>{
         if(message.content.includes(parola)){
             trovata= true;
             testo=testo.replace(eval(`/${parola}/g`),"###");
         }
     })
     
     if(trovata){
         message.delete();
         var embed= new Discord.MessageEmbed()
             .setTitle("Hai detto una parola vietata nel server")
             .setDescription("Hai scritto una parola vietata nella frase: " + testo)
         message.channel.send({embeds: [embed]})
     }
 })