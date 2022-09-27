const { Client } = require("discord.js")
const { MembershipStates } = require("discord.js/typings/enums")
const { ChalkAdvanced } = require('chalk-advanced');
require("dotenv").config()
const client = new Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]}
)
/*const {MessageEmbed} = require('dicord.js');
const db = require('quick.db');*/

client.login(process.env.token)

client.on("ready",() =>{
    console.log(`${ChalkAdvanced.green('Bot Online')}`);
})

const prefix = process.env.PREFIX || "!"


client.on("messageCreate", (message) => {
   if(message.content == prefix + "youtube"){
    message.reply("Il mio canale youtube: https://www.youtube.com/channel/UC-DzoW_FlAfbGyJgBK6PCHw")
   }
   if(message.content == prefix + "twitch"){
    message.reply("Il mio canale twitch: https://www.twitch.tv/enrycon")
   }
   if(message.content == prefix + "twitter"){
    message.reply("Il mio account twitter: https://twitter.com/ENRICOSCHI")
   }
   if(message.content == prefix + "scratch"){
    message.reply("EHI! lo sapevi che ho creato dei giochi su scratch quando andavo alle medie? beh ora si; clicca qui per vedere le mie creazioni: https://scratch.mit.edu/users/enry234m/")
   }
   if(message.content == "ping!"){
    message.reply("pong!")
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
