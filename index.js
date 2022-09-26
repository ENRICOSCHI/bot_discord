const { Client } = require("discord.js")
const { ChalkAdvanced } = require('chalk-advanced');
require("dotenv").config()
const client = new Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]}
)

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
   if(message.content == "cazzo" || message.content=="Cazzo"|| message.content=="CAZZO"){
    message.reply("ATTENZIONE NON SI DICONO PAROLACCE!!")
}
})