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