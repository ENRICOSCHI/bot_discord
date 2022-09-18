const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]}
)

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
   if(message.content == "cazzo" || message.content=="Cazzo"|| message.content=="CAZZO"){
    message.channel.send("ATTENZIONE NON SI DICONO PAROLACCE!!")
}
})