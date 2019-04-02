var Discord = require('discord.io');
var auth = require('./auth.json');
Math.random()
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth
   
});
bot.connect();
bot.on('ready', function (evt) {
    console.log('Connected');
    console.log('Logged in as: ');
    console.log(bot.username + ' - (' + bot.id + ')');
    bot.setPresence({ status: 'idle', game: { name: 'with ;help' } });
    var LunchA = ['Mark has third lunch.','Nick has second lunch.','Isaac has third lunch','Vijay has first lunch.','Paul has first lunch.','Santiago has first lunch','Austin has second lunch.','Steven has first lunch.','John has third lunch.','Sabrina has second lunch.','Coleh has second lunch.','Eli has second lunch.','Charlie has first lunch','Jonah has first lunch','Vijay, Paul, Santiago, Steven, Charlie ,and Jonah all have first lunch.','Nick, Austin, Sabrina, Coleh ,and Eli all have second lunch.','Mark, Isaac ,and John all have third lunch.']
    var LunchB = []
    var LunchC = []
    var LunchD = []
    var LunchE = []
    var LunchF = []
    var LunchG = []
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == ';') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'oink':
                bot.sendMessage({
                    to: channelID,
                    message: 'oink'
                });
            break;
            case 'bestfood':
            bot.sendMessage({
                to: channelID,
                message: 'uncrustable (duh)'
            }

            );
            break;
            case 'Austin':
            bot.sendMessage({
                to: channelID,
                message: 'no'
            }

            );
            break;
            case 'Coleman':
            bot.sendMessage({
                to: channelID,
                message: '-7 blocks a second'
            }

            );
            break;
            case 'John':
            bot.sendMessage({
                to: channelID,
                message: 'brick'
            }

            );
            break;
            case 'help':
            bot.sendMessage({
                to: userID,
                message: 'Hi, I am Oink_Bot. I was created by Mark the Pig. I can execute certain commands that start with a ;. Some of these are *;oink* and *;bestfood*.'
            });
            break;
            case 'AdamC':
            bot.sendMessage({
                to: channelID,
                message: 'Simple logic: You like Macbook, you brick'
            });
            break;
           case 'LunchA Mark':
           bot.sendmessage({
               to: channelID,
               message: LunchA[0]
           })
           break;
           case 'LunchA Nick':
           bot.sendmessage({
               to: channelID,
               message: LunchA[1]
           })
           break;
           case 'LunchA Isaac':
           bot.sendmessage({
               to: channelID,
               message: LunchA[2]
           })
           break;
           case 'LunchA Vijay':
           bot.sendmessage({
               to: channelID,
               message: LunchA[3]
           })
           break;
           case 'LunchA Paul':
           bot.sendmessage({
               to: channelID,
               message: LunchA[4]
           })
           break;
           case 'LunchA Santiago':
           bot.sendmessage({
               to: channelID,
               message: LunchA[5]
           })
           break;
           case 'LunchA Austin':
           bot.sendmessage({
               to: channelID,
               message: LunchA[6]
           })
           break;
           case 'LunchA Steven':
           bot.sendmessage({
               to: channelID,
               message: LunchA[7]
           })
           break;
           case 'LunchA John':
           bot.sendmessage({
               to: channelID,
               message: LunchA[8]
           })
           break;
           case 'LunchA Sabrina':
           bot.sendmessage({
               to: channelID,
               message: LunchA[9]
           })
           break;
           case 'LunchA Coleh':
           bot.sendmessage({
               to: channelID,
               message: LunchA[10]
           })
           break;
           case 'LunchA Eli':
           bot.sendmessage({
               to: channelID,
               message: LunchA[11]
           })
           break;
           case 'LunchA Charlie':
           bot.sendmessage({
               to: channelID,
               message: LunchA[12]
           })
           break;
           case 'LunchA Jonah':
           bot.sendmessage({
               to: channelID,
               message: LunchA[13]
           })
           break;
           case 'LunchA 1st':
           bot.sendmessage({
               to: channelID,
               message: LunchA[14]
           })
           break;
           case 'LunchA 2nd':
           bot.sendmessage({
               to: channelID,
               message: LunchA[15]
           })
           break;
           case 'LunchA 3rd':
           bot.sendmessage({
               to: channelID,
               message: LunchA[16]
           })
           break;
            case 'Pigsarebetterthanturtles':
            bot.addToRole({
                serverID: "392830469500043266",
                roleID: "558630009213026304",
                userID: userID
            }, console.log);
            bot.sendMessage({
                to: channelID,
                message: 'you have the role now pls delete your message'
            });
            break;

            case 'test':
            console.log(evt.d.guild_id)

bot.sendMessage({
                to: channelID,
                message: '.'
            });
            break;
            case 'dieroll1':
            var number = Math.ceil(Math.random() * 6);
            bot.sendMessage({
                to: channelID,
                message: number
            });
            break;
            case 'dieroll2':
            for(var i = 0; i < 2; i++) {
                var number = Math.ceil(Math.random() * 6);
            bot.sendMessage({ 
                to: channelID,
                message: number
            });
            }
            break;
            case 'd1':
            var civ = Math.ceil(Math.random() * 36);
            var civList = ['Venice (so unlucky)','American','Assyrian','Brazillian','Byzantine','Carthaginian','Celtic','Danish','Dutch','Ethiopian','French','German','Greek','Incan','Indian','Indonesian','Japanese','Mayan','Mongolian','Morrocan','Ottoman','Polynesian','Portuguese','Roman','Siamese','Songhai','Swedish','Zulu','Arabian','Austrian','Aztec','Chinese','Korean','Persian','Russian','Shoshone','Spanish',]
            
            console.log(civ,civList[civ]);
            bot.sendMessage({ 
                to: channelID,
                message: civList[civ]
            });
            
            break;
            case 'd2':
            for(var i = 0; i < 2; i++) {
                var civ = Math.ceil(Math.random() * 36);
            var civList = ['Venice (so unlucky)','American','Assyrian','Brazillian','Byzantine','Carthaginian','Celtic','Danish','Dutch','Ethiopian','French','German','Greek','Incan','Indian','Indonesian','Japanese','Mayan','Mongolian','Morrocan','Ottoman','Polynesian','Portuguese','Roman','Siamese','Songhai','Swedish','Zulu','Arabian','Austrian','Aztec','Chinese','Korean','Persian','Russian','Shoshone','Spanish',]
            
            console.log(civ,civList[civ]);
            bot.sendMessage({ 
                to: channelID,
                message: civList[civ]
            });
            }
            break;
            case 'd3':
            for(var i = 0; i < 3; i++) {
                var civ = Math.ceil(Math.random() * 36);
            var civList = ['Venice (so unlucky)','American','Assyrian','Brazillian','Byzantine','Carthaginian','Celtic','Danish','Dutch','Ethiopian','French','German','Greek','Incan','Indian','Indonesian','Japanese','Mayan','Mongolian','Morrocan','Ottoman','Polynesian','Portuguese','Roman','Siamese','Songhai','Swedish','Zulu','Arabian','Austrian','Aztec','Chinese','Korean','Persian','Russian','Shoshone','Spanish',]
            
            console.log(civ,civList[civ]);
            bot.sendMessage({ 
                to: channelID,
                message: civList[civ]
            });
            }
            break;
         }
     }
     bot.on('message', function(user, userID, channelID, message, event) {
        if (message === "bacon") {
            bot.sendMessage({
                to: userID,
                message: ":("
            });
        }
    });
        
});
bot.on('disconnect', function (erMsg, code) {
    console.log('Bot disconnected from Discord with code ' + code + ' for reason: ' + erMsg);
});