const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]}
)

client.login("MTAyMTA3ODI1NjI4OTU5OTUyOA.Grar_G.3P_TRpyQ8GLVjwLj1Jj32Qhexe85U-D1u3B61E")

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
})