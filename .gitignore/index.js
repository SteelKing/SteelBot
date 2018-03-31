const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
   console.log("LE bot a bien été connecter");
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
     
bot.login(process.env.TOKEN);

