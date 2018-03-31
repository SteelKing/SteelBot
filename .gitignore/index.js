const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
   console.log("LE bot a bien été connecter");
});

bot.login(process.env.TOKEN);

