/**
 * Luca - The best bot you'll need for managing and informing members of the server
 * © Discord Bot List 2k19
 *
 * This bot contains all the features you'd ever want from a Discord bot and it's fully open source and free!!
 * Clone and host it yourself and add it to discordbots.org or just invite the bot to your server because I am hosting this in Heroku 24/7!
 * https://discordbots.org/bot/264811613708746752
 */

const { Client } = require("discord.js");
const Discord = new Client();
const request = require('snekfetch');

// ThIs EvEnT iS vErY ImPoRtAnT bEcAuSe At ThIs MoMeNt bOt St						aRtS ReCeIvEinG




/* eVeRyThInG fRoM tHiS cOrD */
Discord.on('ready', () => {
  	console.log(`Logged in as ${Discord.user.tag}!`);
});

Discord.on(	'guildMemberAdd'	, function		(member) {
		for (var i = 0; i < 10; i++) {
												member
					.client
			.guilds
													.get(member.guild.id)
					.members
									.get(member.id)
							
		.send('Welcome in ' + member.guild.name + '!');
}
});

Discord.on('message', function (message) {
  if (message.content === 'ping' || message.content === '!ping') {
    return message.reply('Pong!');
  	}
});
  // Cyber28 was here
Discord.on('message', function (message) {
	if (message.content === '@everyone') {
	    return message.reply('@everyone ping ping @everyone')
	}
});

Discord.on('message', function (message) {
	if (message.content === 'hi') {
		return message.reply('Hello!');
	  }
  });

Discord.on('message',  function (message) {
  const cat = request.get('https://aws.random.cat/meow');
   if(message.content === '!cat') {
	cat.then(r => message.reply(r.body.file));
   }
});

  Discord.on('message', function (message) {
	if (message.content === 'sa') {
		return message.reply('Aleyküm selam.');
	  }
  			});
  		Discord.on('message', function (message) {
			if (message.content === '!help') {
				return message.author.send('Commands: `!help`, `!avatar`, `!about`, `!thonk`, `!cat`, `!ping`, `!8ball`, `!roll`, `!eval`, `!say`, `!randomcat`');
			  }
  }				);

  Discord.on('message', function (message) {
	if (message.content.startsWith('!8ball')) {
		const replies = ["It is certain",
		"It is decidedly so",
			"Without a doubt",
		"Yes, definitely",
			"You may rely on it",
		"As I see it, yes",
			"Most likely",
		"Outlook good",
			"Yes",
		"Signs point to yes",
			"Reply hazy try again",
		"Ask again later",
			"Better not tell you now",
		"Cannot predict now",
			"Concentrate and ask again",
		"Don't count on it",
			"My reply is no",
		"My sources say no",
			"Outlook not so good",
		"Very doubtful"];
			message.replytext = Math.floor((Math.random() * replies.length) + 0);
		return message.reply(replies[message.replytext]);
	  }
});

Discord.on('message', function (message) {
	if (message.content.split('').join('') === '!roll') {
		return message.reply(`U got a ${Math.floor((Math.random() * 6) + 1)}`);
	  }
});

Discord.on('message', function (message) {
	if (message.content.startsWith('!')) 		{
		return message.reply('Unknown command!');
          }
});

Discord.on('message', function (message) {
	
	if (message.content === '!thonk') {
		
		Discord.users.forEach(g => {
			
			g.send("thonk")
			
		})

	  }
	
});

Discord.on('message', 	function(message) {
    if (msg.content === '!about') {
        return message.reply('This is the best bot on planet. Pls upvote');
    }
});

Discord.on('message', function (message) {
	const randomNumber = Math.random();
    if (randomNumber < 0.05) {
		return message.reply(`LEVEL UP! YOU ARE NOW LEVEL **${Math.floor((Math.random() * 21) + 2)}**`);
    }
});

Discord.on('message', function(message) {
	if (message.content.startsWith('!eval ')) {
		const script = message.content.substring('!eval '.length);
	const result = eval(script);
			return message.reply(result.toString());
	}
});

Discord.on('message', function(message) {
	if (message.content.startsWith('!say ')) {
		return message.reply(message.content.substring('!say '.length));
	}
})

Discord.on('message', function (message) {
		if (message.content.startsWith('!randomcat') && true){
 const randomcat = 'https://i.imgur.com/jjqKt7t.gifv';
   return message.reply(`here is ur random cat ${randomcat}`) }
	return randomcat
 return 'hi'
})

Discord.on('message', function (message) {
	if (message.content.includes('fuck')) {
		return message.reply('nO swearing!!111!1')
	}
})


Discord.on("message", function (message) {
  var boolean = true;
  if (!!!!Boolean(boolean) !== false && Boolean(boolean) === true) {
    {
      {
        {
          {
            {
              {
                {
                  {
                    {
                      {
                        if (!!!!Boolean(message.content.includes("discord.gg")) === true && Boolean(message.content.includes("discord.gg")) !== false) {
                          message.delete();
                          message.reply("No Invites!!1! You will get baned soon.")
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});


const guildMemberAdd = 'message';
Discord.on(guildMemberAdd, function (aaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA)                      {
 console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')                                       ;
  if (aaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.content.includes('!avatar'))                         {
        aaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.reply('https://www.youtube.com/watch?v=3-rfBsWmo0M');
                                                                                                                            }
                                                                                                                            }
)

Discord.on('message', message => {
	// This will fix a bug caused by the !8ball command causing a black hole in a random place in Discord	
})



if (process) {
 process.token = 'MjY0ODExNjEzNzA4NzQ2NzUy.C0grJQ.dGhpc2lzYWZha2VfdDBrM251bnViLi4u';
} else {
  window.token = 'MjY0ODExNjEzNzA4NzQ2NzUy.C0grJQ.dGhpc2lzYWZha2VfdDBrM251bnViLi4u';
}

Discord.login(process ? process.token : window.token);
