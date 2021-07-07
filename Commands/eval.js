module.exports = function(discord, client, prefix, chalk){
	console.log(chalk.cyanBright('Loaded File:'), 'eval.js')

	client.on('message', (message) => {
		if (message.content.startsWith(".eval")) {
    	if(!message.author.id == "749092490556080158") return;
    	var result = message.content.split(" ").slice(1).join(" ")
      let evaled = eval(result);
      message.channel.send('Success')
        }
	})
}