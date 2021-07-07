module.exports = function(discord, client, chalk) {
	console.log(chalk.cyanBright('Loaded File:'), 'reminders.js')
	
	
	client.on('message', (message) => {	
	//Filters
	if(!message.guild) return;
	if(message.author.bot) return;
	//Reminder Embeds
	if(message.channel.parent.id == '839276389282480128'){
		const exclusiveAccess = new discord.MessageEmbed()
		.setColor('YELLOW')
		.setTitle('Advertisement Posted')
		.setAuthor(message.guild.name)
		.setDescription(`Thank you for advertising using Metro Advertising, <@` + message.author.id + `>! We have some guidelines you need to follow. 
	
		<a:this:839971029597683743> Your advertisement cannot not break [**Terms of Service**](https://www.discord.com/terms)
		<a:this:839971029597683743> No Scamming, including false giveaways and invite rewards.
		<a:this:839971029597683743> Your server needs to be unique, not copied.
		<a:this:839971029597683743> NSFW Servers cannot have NSFW banners in Exclusive Channels.
		<a:this:839971029597683743> You cannot give access to NSFW channels to minors
		<a:this:839971029597683743> Descriptions are optional in this category but encouraged
		<a:this:839971029597683743> All links must be permanent
		
		Don't have access to this channel? This is for exclusive members. You may be required to reach a specific level, amount of invites, be a partner, server staff, vote, or pay to access.

		**Happy Advertising**, from the Metro Advertising staff team :slight_smile:

		> *This is an automatic message, do not respond. If you have any issues or questions, make sure to ask in main chat.*`)
		.setTimestamp()
		if(client.user.lastMessage !== null){
			client.user.lastMessage.delete()
		}
		message.channel.send(exclusiveAccess)
		message.react('☑')

	if(message.channel.parent.id == '839289471907528704'){
		const timerReminder = new discord.MessageEmbed()
		.setColor('YELLOW')
		.setTitle('Advertisement Posted')
		.setAuthor(message.guild.name)
		.setDescription(`Thank you for advertising using Metro Advertising, <@` + message.author.id + `>! We have some guidelines you need to follow. 
	
		<a:this:839971029597683743> Your advertisement cannot not break [**Terms of Service**](https://www.discord.com/terms)
		<a:this:839971029597683743> No Scamming, including false giveaways and invite rewards.
		<a:this:839971029597683743> Your server needs to be unique, not copied.
		<a:this:839971029597683743> NSFW Servers cannot have NSFW banners in Exclusive Channels.
		<a:this:839971029597683743> You cannot give access to NSFW channels to minors
		<a:this:839971029597683743> Your ad must have a description which tells others what it does.
		<a:this:839971029597683743> All links must be permanent
		
		Welcome to the Ad Timers! You may post everytime you can, regardless of if it is back to back. The amount of time you must wait is in the name, make sure to read channel topic because we may reduce the time on occasions.

		**Happy Advertising**, from the Metro Advertising staff team :slight_smile:

		> *This is an automatic message, do not respond. If you have any issues or questions, make sure to ask in main chat.*`)
		.setTimestamp()
		if(client.user.lastMessage !== null){
			client.user.lastMessage.delete()
		}
		message.channel.send(timerReminder)
		message.react('☑')
	}
	if(message.channel.parent.id == '839291577934282852'){
		if(message.channel.id == '841641318278365224') return;
		if(message.channel.id == '847881185526546473') return;
		if(message.channel.id == '839293792170803210') return;
		if(message.author.id == '0') return message.delete()
		const advertisingReminder = new discord.MessageEmbed()
		.setColor('YELLOW')
		.setTitle('Advertisement Posted')
		.setAuthor(message.guild.name)
		.setDescription(`Thank you for advertising using Metro Advertising, <@` + message.author.id + `>! We have some guidelines you need to follow. 
	
		<a:this:839971029597683743> Your advertisement cannot not break [**Terms of Service**](https://www.discord.com/terms)
		<a:this:839971029597683743> No Scamming, including false giveaways and invite rewards.
		<a:this:839971029597683743> Your server needs to be unique, not copied.
		<a:this:839971029597683743> No NSFW focused servers except for in <#839295344160145459>
		<a:this:839971029597683743> You cannot give access to NSFW channels to minors
		<a:this:839971029597683743> Your ad must have a description which tells others what it does.
		<a:this:839971029597683743> All links must be permanent
		
		Welcome to general advertising channels! There's a ton of channels you can post your ad in! Remember to advertise only in the channels where you advertisement applies (example: No SFW servers in <#839295344160145459>)

		**Happy Advertising**, from the Metro Advertising staff team :slight_smile:

		> *This is an automatic message, do not respond. If you have any issues or questions, make sure to ask in main chat.*
		
		Click [__here__](https://discord.com/channels/836097196629819413/839244669245325373/848056179271794709) for full list of advertising rules`)
		.setTimestamp()
		if(client.user.lastMessage !== null){
			client.user.lastMessage.delete()
		}
		message.channel.send(advertisingReminder)
		message.react('☑')
	}
	if(message.channel.parent.id == '839468419022848000'){
		if(doLooking == false) return;
		const lookingReminder = new discord.MessageEmbed()
		.setColor('YELLOW')
		.setTitle('Advertisement Posted')
		.setAuthor(message.guild.name)
		.setDescription(`Thank you for advertising using Metro Advertising, <@` + message.author.id + `>! We have some guidelines you need to follow. 
	
		<a:this:839971029597683743> Your advertisement cannot not break [**Terms of Service**](https://www.discord.com/terms)
		<a:this:839971029597683743> No Scamming, what your ad states here is what you give. No less
		<a:this:839971029597683743> Your ad cannot be an copy
		<a:this:839971029597683743> NSFW advertisements are not allowed.
		<a:this:839971029597683743> Unless given permission by the hiree, no minor should access NSFW or senstive topics.
		<a:this:839971029597683743> You must be descriptive about what you are looking for.
		<a:this:839971029597683743> Post in the correct channel!
		
		Looking for someone to complete a job? Are you looking to complete a job? Want a partner manager, moderator or management? Post your requests here! Note: please do not post links in this channel.

		**Happy Advertising**, from the Metro Advertising staff team :slight_smile:

		> *This is an automatic message, do not respond. If you have any issues or questions, make sure to ask in main chat.*`)
		.setTimestamp()
		if(client.user.lastMessage !== null){
			client.user.lastMessage.delete()
		}
		message.channel.send(lookingReminder)
		message.react('☑')
	}
}
	})

//Second part of the reminders
client.on('message', (message) => {
	if(message.channel.id == '839293792170803210'){
		if(message.author.id == '0') return message.delete()
		if(message.author.bot) return;
		if(!message.guild) return;
		
		const noDesc = new discord.MessageEmbed()
		.setColor('YELLOW')
		.setTitle('Advertisement Posted')
		.setAuthor(message.guild.name)
		.setDescription(`Thank you for advertising using Metro Advertising, <@` + message.author.id + `>! We have some guidelines you need to follow. 
	
		<a:this:839971029597683743> Your advertisement cannot not break [**Terms of Service**](https://www.discord.com/terms)
		<a:this:839971029597683743> No Scamming, including false giveaways and invite rewards.
		<a:this:839971029597683743> Your server needs to be unique, not copied.
		<a:this:839971029597683743> No NSFW focused servers except for in <#839295344160145459>
		<a:this:839971029597683743> You cannot give access to NSFW channels to minors
		<a:this:839971029597683743> Your advertisement __cannot__ have a description (read below)
		<a:this:839971029597683743> All links must be permanent
		
		This is the no description advertising channel. As the name suggestion, your advertisement cannot have a description. You may put the name of the server, (optional) borders, invite link, vanity link, banner.

		**Happy Advertising**, from the Metro Advertising staff team :slight_smile:

		> *This is an automatic message, do not respond. If you have any issues or questions, make sure to ask in main chat.*
		
		Click [__here__](https://discord.com/channels/836097196629819413/839244669245325373/848056179271794709) for full list of advertising rules`)
		.setTimestamp()
		if(client.user.lastMessage !== null){
			client.user.lastMessage.delete()
		}
		message.channel.send(noDesc)
		message.react('☑')
	}
})

}