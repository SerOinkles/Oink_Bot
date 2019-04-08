var Discord = require('discord.io');
var auth = require('./auth.json');
// lunch arrays
var LunchA = ['Mark has third lunch.','Nick has second lunch.','Isaac has third lunch','Vijay has first lunch.','Paul has first lunch.','Santiago has first lunch','Austin has second lunch.','Steven has first lunch.','John has third lunch.','Sabrina has second lunch.','Coleh has second lunch.','Eli has second lunch.','Charlie has first lunch.','Jonah has first lunch.','Vijay, Paul, Santiago, Steven, Charlie ,and Jonah all have first lunch.','Nick, Austin, Sabrina, Coleh ,and Eli all have second lunch.','Mark, Isaac ,and John all have third lunch.']
var LunchB = ['Mark has second lunch.','Nick has second lunch.','Isaac has second lunch.','Vijay has first lunch.','Paul has third lunch.','Santiago has third lunch.','Austin has third lunch.','Steven has second lunch.','John has first lunch.','Sabrina has first lunch.','Coleh has first lunch.','ELi has first lunch.','Charlie has second lunch.','Jonah has third lunch.','Vijay, Austin, John, Coleh, Sabrina ,and Eli all have first lunch.','Mark, Nick, Steven ,and Charlie all have second lunch.','Paul, Santiago ,and Jonah all have third lunch.']
var LunchC = ['Mark has second lunch.','Nick has third lunch.','Isaac has first lunch.','Vijay has first lunch.','Paul has third lunch.','Santiago has second lunch.','Austin has first lunch.','Steven has third lunch.','John has second lunch.','Sabrina has third lunch.','Coleh has third lunch.','Eli has third lunch.','Charlie has third lunch.','Jonah has first lunch.','Isaac, Vijay, Austin ,and Jonah all have first lunch.','Mark, Santiago ,and John all have second lunch.','Nick, Paul, Steven, Sabrina, Coleh, Eli ,and Charlie all have third lunch.']
var LunchD = ['Mark has first lunch.','Nick has first lunch.','Isaac has second lunch.','Vijay has second lunch.','Paul has first lunch.','Santiago has first lunch.','Austin has second lunch.','Steven has first lunch.','John has first lunch.','Sabrina has first lunch.','Coleh has first lunch.','Eli has first lunch.','Charlie has first lunch.','Jonah has third lunch.','Mark, Nick, Paul, Santiago, Steven, John, Sabrina, Coleh, Eli ,and Charlie all have first lunch.', 'Isaac, Vijay ,and Austin all have second lunch.','Only Jonah has third lunch. :(']
var LunchE = ['Mark has second lunch.','Nick has first lunch.','Isaac has first lunch.','Vijay has second lunch.','Paul has second lunch.','Santiago has second lunch.','Austin has second lunch.','Steven has second lunch.','John has second lunch.','Sabrina has second lunch.','Coleh has second lunch.','Eli has second lunch.','Charlie has second lunch.','Jonah has second lunch.','Nick and Isaac have first lunch.','Mark, Vijay, Paul, Santiago, Austin, Steven, John, Sabrina, Coleh, Eli, Charlie ,and Jonah all have second lunch.','No one has thrid lunch.']
var LunchF = ['Mark has third lunch.','Nick has second lunch.','Isaac has third lunch.','Vijay has third lunch.','Paul has first lunch.','Santiago has second lunch.','Austin has first lunch.','Steven has first lunch.','John has second lunch.','Sabrina has third lunch.','Coleh has second lunch.','Eli has second lunch.','Charlie has first lunch.','Jonah has second lunch.','Paul, Steven ,and Charlie all have first lunch.','Nick, Santiago, John, Coleh, Eli ,and Jonah all have second lunch.','Mark, Isaac, Vijay, Austin ,and Sabrina all have third lunch.']
var LunchG = ['Mark has first lunch.','Nick has second lunch.','Isaac has second lunch.','Vijay has third lunch.','Paul has second lunch.','Santiago has first lunch.','Austin has first lunch.','Steven has second lunch.','John has first lunch.','Sabrina has first lunch.','Coleh has first lunch','Eli has third lunch.','Charli has second lunch.','Jonah has second lunch.','Mark, Santiago, Austin, John, Sabrina ,and Coleh all have first lunch.','Nick, Isaac, Paul, Steven, Charlie ,and Jonah all have second lunch.','Vijay and Eli have third lunch.']
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth
   
});
bot.connect();
bot.on('ready', function (evt) {
    //sets status to be idle and playing the game "with ;help"
    console.log('Connected');
    console.log('Logged in as: ');
    console.log(bot.username + ' - (' + bot.id + ')');
    bot.setPresence({ status: 'idle', game: { name: 'with ;help' } });

});
console.log(LunchA[0]);
bot.on('message', function (user, userID, channelID, message, evt) {
    // It will listen for messages that will start with `;`
    if (message.substring(0, 1) == ';') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       //string jokes like ;oink
        args = args.splice(1);
        switch(cmd) {
            
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
            //generates people in each lunch and what lunch a person is in
           case 'LunchA_Mark':
           bot.sendMessage({
               to: channelID,
               message: LunchA[0]
           })
           console.log(LunchA[0]);
           break;
           case 'LunchA_Nick':
           bot.sendMessage({
               to: channelID,
               message: LunchA[1]
           })
           break;
           case 'LunchA_Isaac':
           bot.sendMessage({
               to: channelID,
               message: LunchA[2]
           })
           break;
           case 'LunchA_Vijay':
           bot.sendMessage({
               to: channelID,
               message: LunchA[3]
           })
           break;
           case 'LunchA_Paul':
           bot.sendMessage({
               to: channelID,
               message: LunchA[4]
           })
           break;
           case 'LunchA_Santiago':
           bot.sendMessage({
               to: channelID,
               message: LunchA[5]
           })
           break;
           case 'LunchA_Austin':
           bot.sendMessage({
               to: channelID,
               message: LunchA[6]
           })
           break;
           case 'LunchA_Steven':
           bot.sendMessage({
               to: channelID,
               message: LunchA[7]
           })
           break;
           case 'LunchA_John':
           bot.sendMessage({
               to: channelID,
               message: LunchA[8]
           })
           break;
           case 'LunchA_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: LunchA[9]
           })
           break;
           case 'LunchA_Coleh':
           bot.sendMessage({
               to: channelID,
               message: LunchA[10]
           })
           break;
           case 'LunchA_Eli':
           bot.sendMessage({
               to: channelID,
               message: LunchA[11]
           })
           break;
           case 'LunchA_Charlie':
           bot.sendMessage({
               to: channelID,
               message: LunchA[12]
           })
           break;
           case 'LunchA_Jonah':
           bot.sendMessage({
               to: channelID,
               message: LunchA[13]
           })
           break;
           case 'LunchA_1st':
           bot.sendMessage({
               to: channelID,
               message: LunchA[14]
           })
           break;
           case 'LunchA_2nd':
           bot.sendMessage({
               to: channelID,
               message: LunchA[15]
           })
           break;
           case 'LunchA_3rd':
           bot.sendMessage({
               to: channelID,
               message: LunchA[16]
           })
           break;
           case 'LunchB_Mark':
           bot.sendMessage({
               to: channelID,
               message: LunchB[0]
           })
           console.log(LunchA[0]);
           break;
           case 'LunchB_Nick':
           bot.sendMessage({
               to: channelID,
               message: LunchB[1]
           })
           break;
           case 'LunchB_Isaac':
           bot.sendMessage({
               to: channelID,
               message: LunchB[2]
           })
           break;
           case 'LunchB_Vijay':
           bot.sendMessage({
               to: channelID,
               message: LunchB[3]
           })
           break;
           case 'LunchB_Paul':
           bot.sendMessage({
               to: channelID,
               message: LunchB[4]
           })
           break;
           case 'LunchB_Santiago':
           bot.sendMessage({
               to: channelID,
               message: LunchB[5]
           })
           break;
           case 'LunchB_Austin':
           bot.sendMessage({
               to: channelID,
               message: LunchB[6]
           })
           break;
           case 'LunchB_Steven':
           bot.sendMessage({
               to: channelID,
               message: LunchB[7]
           })
           break;
           case 'LunchB_John':
           bot.sendMessage({
               to: channelID,
               message: LunchB[8]
           })
           break;
           case 'LunchB_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: LunchB[9]
           })
           break;
           case 'LunchB_Coleh':
           bot.sendMessage({
               to: channelID,
               message: LunchB[10]
           })
           break;
           case 'LunchB_Eli':
           bot.sendMessage({
               to: channelID,
               message: LunchB[11]
           })
           break;
           case 'LunchB_Charlie':
           bot.sendMessage({
               to: channelID,
               message: LunchB[12]
           })
           break;
           case 'LunchB_Jonah':
           bot.sendMessage({
               to: channelID,
               message: LunchB[13]
           })
           break;
           case 'LunchB_1st':
           bot.sendMessage({
               to: channelID,
               message: LunchB[14]
           })
           break;
           case 'LunchB_2nd':
           bot.sendMessage({
               to: channelID,
               message: LunchB[15]
           })
           break;
           case 'LunchB_3rd':
           bot.sendMessage({
               to: channelID,
               message: LunchB[16]
           })
           break;
           case 'LunchC_Mark':
           bot.sendMessage({
               to: channelID,
               message: LunchC[0]
           })
           console.log(LunchA[0]);
           break;
           case 'LunchC_Nick':
           bot.sendMessage({
               to: channelID,
               message: LunchC[1]
           })
           break;
           case 'LunchC_Isaac':
           bot.sendMessage({
               to: channelID,
               message: LunchC[2]
           })
           break;
           case 'LunchC_Vijay':
           bot.sendMessage({
               to: channelID,
               message: LunchC[3]
           })
           break;
           case 'LunchC_Paul':
           bot.sendMessage({
               to: channelID,
               message: LunchC[4]
           })
           break;
           case 'LunchC_Santiago':
           bot.sendMessage({
               to: channelID,
               message: LunchC[5]
           })
           break;
           case 'LunchC_Austin':
           bot.sendMessage({
               to: channelID,
               message: LunchC[6]
           })
           break;
           case 'LunchC_Steven':
           bot.sendMessage({
               to: channelID,
               message: LunchC[7]
           })
           break;
           case 'LunchC_John':
           bot.sendMessage({
               to: channelID,
               message: LunchC[8]
           })
           break;
           case 'LunchC_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: LunchC[9]
           })
           break;
           case 'LunchC_Coleh':
           bot.sendMessage({
               to: channelID,
               message: LunchC[10]
           })
           break;
           case 'LunchC_Eli':
           bot.sendMessage({
               to: channelID,
               message: LunchC[11]
           })
           break;
           case 'LunchC_Charlie':
           bot.sendMessage({
               to: channelID,
               message: LunchC[12]
           })
           break;
           case 'LunchC_Jonah':
           bot.sendMessage({
               to: channelID,
               message: LunchC[13]
           })
           break;
           case 'LunchC_1st':
           bot.sendMessage({
               to: channelID,
               message: LunchC[14]
           })
           break;
           case 'LunchC_2nd':
           bot.sendMessage({
               to: channelID,
               message: LunchC[15]
           })
           break;
           case 'LunchC_3rd':
           bot.sendMessage({
               to: channelID,
               message: LunchC[16]
           })
           break;
           case 'LunchD_Mark':
           bot.sendMessage({
               to: channelID,
               message: LunchD[0]
           })
           console.log(LunchA[0]);
           break;
           case 'LunchD_Nick':
           bot.sendMessage({
               to: channelID,
               message: LunchD[1]
           })
           break;
           case 'LunchD_Isaac':
           bot.sendMessage({
               to: channelID,
               message: LunchD[2]
           })
           break;
           case 'LunchD_Vijay':
           bot.sendMessage({
               to: channelID,
               message: LunchD[3]
           })
           break;
           case 'LunchD_Paul':
           bot.sendMessage({
               to: channelID,
               message: LunchD[4]
           })
           break;
           case 'LunchD_Santiago':
           bot.sendMessage({
               to: channelID,
               message: LunchD[5]
           })
           break;
           case 'LunchD_Austin':
           bot.sendMessage({
               to: channelID,
               message: LunchD[6]
           })
           break;
           case 'LunchD_Steven':
           bot.sendMessage({
               to: channelID,
               message: LunchD[7]
           })
           break;
           case 'LunchD_John':
           bot.sendMessage({
               to: channelID,
               message: LunchD[8]
           })
           break;
           case 'LunchD_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: LunchD[9]
           })
           break;
           case 'LunchD_Coleh':
           bot.sendMessage({
               to: channelID,
               message: LunchD[10]
           })
           break;
           case 'LunchD_Eli':
           bot.sendMessage({
               to: channelID,
               message: LunchD[11]
           })
           break;
           case 'LunchD_Charlie':
           bot.sendMessage({
               to: channelID,
               message: LunchD[12]
           })
           break;
           case 'LunchD_Jonah':
           bot.sendMessage({
               to: channelID,
               message: LunchD[13]
           })
           break;
           case 'LunchD_1st':
           bot.sendMessage({
               to: channelID,
               message: LunchD[14]
           })
           break;
           case 'LunchD_2nd':
           bot.sendMessage({
               to: channelID,
               message: LunchD[15]
           })
           break;
           case 'LunchD_3rd':
           bot.sendMessage({
               to: channelID,
               message: LunchD[16]
           })
           break;
           case 'LunchE_Mark':
           bot.sendMessage({
               to: channelID,
               message: LunchE[0]
           })
           console.log(LunchE[0]);
           break;
           case 'LunchE_Nick':
           bot.sendMessage({
               to: channelID,
               message: LunchE[1]
           })
           break;
           case 'LunchE_Isaac':
           bot.sendMessage({
               to: channelID,
               message: LunchE[2]
           })
           break;
           case 'LunchE_Vijay':
           bot.sendMessage({
               to: channelID,
               message: LunchE[3]
           })
           break;
           case 'LunchE_Paul':
           bot.sendMessage({
               to: channelID,
               message: LunchE[4]
           })
           break;
           case 'LunchE_Santiago':
           bot.sendMessage({
               to: channelID,
               message: LunchE[5]
           })
           break;
           case 'LunchE_Austin':
           bot.sendMessage({
               to: channelID,
               message: LunchE[6]
           })
           break;
           case 'LunchE_Steven':
           bot.sendMessage({
               to: channelID,
               message: LunchE[7]
           })
           break;
           case 'LunchE_John':
           bot.sendMessage({
               to: channelID,
               message: LunchE[8]
           })
           break;
           case 'LunchE_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: LunchE[9]
           })
           break;
           case 'LunchE_Coleh':
           bot.sendMessage({
               to: channelID,
               message: LunchE[10]
           })
           break;
           case 'LunchE_Eli':
           bot.sendMessage({
               to: channelID,
               message: LunchE[11]
           })
           break;
           case 'LunchE_Charlie':
           bot.sendMessage({
               to: channelID,
               message: LunchE[12]
           })
           break;
           case 'LunchE_Jonah':
           bot.sendMessage({
               to: channelID,
               message: LunchE[13]
           })
           break;
           case 'LunchE_1st':
           bot.sendMessage({
               to: channelID,
               message: LunchE[14]
           })
           break;
           case 'LunchE_2nd':
           bot.sendMessage({
               to: channelID,
               message: LunchE[15]
           })
           break;
           case 'LunchE_3rd':
           bot.sendMessage({
               to: channelID,
               message: LunchE[16]
           })
           break;
           case 'LunchF_Mark':
           bot.sendMessage({
               to: channelID,
               message: LunchF[0]
           })
           console.log(LunchF[0]);
           break;
           case 'LunchF_Nick':
           bot.sendMessage({
               to: channelID,
               message: LunchF[1]
           })
           break;
           case 'LunchF_Isaac':
           bot.sendMessage({
               to: channelID,
               message: LunchF[2]
           })
           break;
           case 'LunchF_Vijay':
           bot.sendMessage({
               to: channelID,
               message: LunchF[3]
           })
           break;
           case 'LunchF_Paul':
           bot.sendMessage({
               to: channelID,
               message: LunchF[4]
           })
           break;
           case 'LunchF_Santiago':
           bot.sendMessage({
               to: channelID,
               message: LunchF[5]
           })
           break;
           case 'LunchF_Austin':
           bot.sendMessage({
               to: channelID,
               message: LunchF[6]
           })
           break;
           case 'LunchF_Steven':
           bot.sendMessage({
               to: channelID,
               message: LunchF[7]
           })
           break;
           case 'LunchF_John':
           bot.sendMessage({
               to: channelID,
               message: LunchF[8]
           })
           break;
           case 'LunchF_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: LunchF[9]
           })
           break;
           case 'LunchF_Coleh':
           bot.sendMessage({
               to: channelID,
               message: LunchF[10]
           })
           break;
           case 'LunchF_Eli':
           bot.sendMessage({
               to: channelID,
               message: LunchF[11]
           })
           break;
           case 'LunchF_Charlie':
           bot.sendMessage({
               to: channelID,
               message: LunchF[12]
           })
           break;
           case 'LunchF_Jonah':
           bot.sendMessage({
               to: channelID,
               message: LunchF[13]
           })
           break;
           case 'LunchF_1st':
           bot.sendMessage({
               to: channelID,
               message: LunchF[14]
           })
           break;
           case 'LunchF_2nd':
           bot.sendMessage({
               to: channelID,
               message: LunchF[15]
           })
           break;
           case 'LunchF_3rd':
           bot.sendMessage({
               to: channelID,
               message: LunchF[16]
           })
           break;
           case 'LunchG_Mark':
           bot.sendMessage({
               to: channelID,
               message: LunchG[0]
           })
           console.log(LunchG[0]);
           break;
           case 'LunchG_Nick':
           bot.sendMessage({
               to: channelID,
               message: LunchG[1]
           })
           break;
           case 'LunchG_Isaac':
           bot.sendMessage({
               to: channelID,
               message: LunchG[2]
           })
           break;
           case 'LunchG_Vijay':
           bot.sendMessage({
               to: channelID,
               message: LunchG[3]
           })
           break;
           case 'LunchG_Paul':
           bot.sendMessage({
               to: channelID,
               message: LunchG[4]
           })
           break;
           case 'LunchG_Santiago':
           bot.sendMessage({
               to: channelID,
               message: LunchG[5]
           })
           break;
           case 'LunchG_Austin':
           bot.sendMessage({
               to: channelID,
               message: LunchG[6]
           })
           break;
           case 'LunchG_Steven':
           bot.sendMessage({
               to: channelID,
               message: LunchG[7]
           })
           break;
           case 'LunchG_John':
           bot.sendMessage({
               to: channelID,
               message: LunchG[8]
           })
           break;
           case 'LunchG_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: LunchG[9]
           })
           break;
           case 'LunchG_Coleh':
           bot.sendMessage({
               to: channelID,
               message: LunchG[10]
           })
           break;
           case 'LunchG_Eli':
           bot.sendMessage({
               to: channelID,
               message: LunchG[11]
           })
           break;
           case 'LunchG_Charlie':
           bot.sendMessage({
               to: channelID,
               message: LunchG[12]
           })
           break;
           case 'LunchG_Jonah':
           bot.sendMessage({
               to: channelID,
               message: LunchG[13]
           })
           break;
           case 'LunchG_1st':
           bot.sendMessage({
               to: channelID,
               message: LunchG[14]
           })
           break;
           case 'LunchG_2nd':
           bot.sendMessage({
               to: channelID,
               message: LunchG[15]
           })
           break;
           case 'LunchG_3rd':
           bot.sendMessage({
               to: channelID,
               message: LunchG[16]
           })
           break;
           //End of lunch generator
           //role creator
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
            //gets the server id
            case 'test':
            console.log(evt.d.guild_id)

bot.sendMessage({
                to: channelID,
                message: '.'
            });
            break;
            //random generators below
            //die roller
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
            //Civ 5 drafter
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
            //meme custom commands
            case 'meme':
            if(~(bot.servers['392830469500043266'].members[userID].roles.indexOf('558630009213026304'))) {
            bot.sendMessage({
                to: '387014509409075210',
                message: "case " + "'" + args[0] + "'" + ": \n"
                + "bot.sendMessage({ \n" + "to: channelID, \n" + 
                "message: " + "'" + args[1] + "' \n"
                 +  " }); \n" + 
                 "break; \n"
            });   
            break;
            }
            else{
               bot.sendMessage({ 
                   to: channelID,
                   message: 'you are not worthy'
            });
            }
            break; 
            case 'randomgen':
            if(~(bot.servers['392830469500043266'].members[userID].roles.indexOf('558630009213026304'))) {
            bot.sendMessage({
                to: '387014509409075210',
                message: "case " + "'" + args[0] + "' \n" + "var custom = Math.ceil(Math.random() * " + args[1] + "); \n" + "var customList = [' '," + args[2] + '] \n' + " bot.sendMessage({ \n" + 'to: channelID, \n' + ' message: customList[custom] \n' + '}); \n' + 'break;'
            });   
            break;
            }
            else{
               bot.sendMessage({ 
                   to: channelID,
                   message: 'you are not worthy'
            });
            }
            break; 
            //custom commands go here
            
        }
           
     }
     //sends someone a ":(" if they type "bacon" in a message
     bot.on('message', function(user, userID, channelID, message, event) {
        if (message === "bacon") {
            bot.sendMessage({
                to: userID,
                message: ":("
            });
        }
    });
        
});
//Explains why the bot crashed
bot.on('disconnect', function (erMsg, code) {
    console.log('Bot disconnected from Discord with code ' + code + ' for reason: ' + erMsg);
});