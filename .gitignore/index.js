const Discord = require ("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
    console.log("Le bot est demarer.")
    client.user.setActivity("ui est trop bo")
    this.queue = new Map();
})

client.on("message", message => {

 if(message.content.includes("!help")){
    var Help = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Gengar 0.1 By Zqink.")   
    .setColor("14#DD0C")
    .setDescription(":robot: Voici les commandes du bot :")
    .addField("Administration", "!ban, !kick")
    .addField("Fun", )
    .setThumbnail("https://cdn.discordapp.com/attachments/461957203994214422/548567698116706309/giphy.gif")
    .setImage("https://cdn.discordapp.com/attachments/461957203994214422/548567698116706309/giphy.gif")
    .setFooter("By Zqink")
    message.channel.sendEmbed(Help)
   }
   const ban = require (".!ban");

   client.on("message", function(message){
if (ban.match(message)){
    return ban.action(message)
}
   });
   })

client.login("NTQ3ODk1MjYwMDQzNTQyNTMx.D1MAUg.chuv-foy5aMFxcZulqOiK6Teuec")
