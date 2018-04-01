const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on('message', function(message) {
      if (message.content === '!ping') {
         message.reply('pong')
      }
})

bot.on('guildMemberAdd', function (member) {
      member.createDM().then(function (channel) {
            return channel.send('Bienvenue sur le channel ' + member.displayName)
      }).catch(console.error)
})

bot.on('message', function(message) {
      if (message.content === 'Bonjour') {
         message.reply('Salut')
      }
})

bot.on('message', function(message) {
      if (message.content === 'Hello') {
         message.reply('Salut')
      }
})

bot.on('message', function(message) {
      if (message.content === 'Yo') {
         message.reply('Wesh Wesh Canapêche')
      }
})

bot.on('message', function(message) {
      if (message.content === 'pute') {
         message.delete()
            message.reply('le langage ...')
      }
})

bot.on("ready", function() {
   console.log("LE bot a bien été connecter");
});
  
bot.login(process.env.TOKEN);

