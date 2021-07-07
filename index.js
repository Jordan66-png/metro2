const discord = require("discord.js");
const client = new discord.Client()
const chalk = require('chalk')
//Misc
const fun = null
const prefix = '.'

//Requires
const host = require('./Functions/hosting.js')
const reminders = require('./Functions/reminders.js')
const help = require('./Commands/help.js')
const evalC = require('./Commands/eval.js')

client.on("ready", () => {
  client.user.setActivity("Metro Advertising", { type: "LISTENING"})
	host(fun)
	reminders(discord, client, chalk)
	evalC(discord, client, prefix, chalk)
})

process.on('unhandledRejection', error => {
		console.log(error.message)
	});

client.on('guildMemberAdd', function(member){
  member.roles.add('851181990682427472')
	member.roles.add('839472134057099284')
	member.roles.add('839471443938377738')
});

client.login(process.env.token)
