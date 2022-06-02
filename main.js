const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
let TOKEN = 'OTgxOTM4NzQ0NTc3ODg0MjEw.GEoWw8.KjWm5xNeR2K4IiicGa0I-Bmre4kxPVbZeDWYUc'

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})


client.on("message", msg => {

// prevents being read as duplicate message
if (msg.author.bot){
      return
  }
  split_message = msg.content.split(" ")
  
// Math logical functions  
if (split_message[1] == "+") {
    let x = parseInt(split_message[0]) + parseInt(split_message[2])
    let message = String(x)
    msg.reply(message)
  }

else if (split_message[1] == "-"){
    let message = String(split_message[0] - split_message[2])
    msg.reply(message)
}

else if (split_message[1] == "*"){
    let message = String(split_message[0] * split_message[2])
    msg.reply(message)
}

else if (split_message[1] == "/"){
    let message = String(split_message[0] / split_message[2])
    msg.reply(message)
}

})

client.login(TOKEN)
