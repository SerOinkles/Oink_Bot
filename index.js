var Discord = require('discord.io');
var auth = require('./auth.json');
// lunch arrays
var lunchA = ['Mark has third lunch.','Nick has second lunch.','Isaac has third lunch','Vijay has first lunch.','Paul has first lunch.','Santiago has first lunch','Austin has second lunch.','Steven has first lunch.','John has third lunch.','Sabrina has second lunch.','Coleh has second lunch.','Eli has second lunch.','Charlie has first lunch.','Jonah has first lunch.','Vijay, Paul, Santiago, Steven, Charlie, and Jonah all have first lunch.','Nick, Austin, Sabrina, Coleh, and Eli all have second lunch.','Mark, Isaac, and John all have third lunch.']
var lunchB = ['Mark has second lunch.','Nick has second lunch.','Isaac has second lunch.','Vijay has first lunch.','Paul has third lunch.','Santiago has third lunch.','Austin has third lunch.','Steven has second lunch.','John has first lunch.','Sabrina has first lunch.','Coleh has first lunch.','ELi has first lunch.','Charlie has second lunch.','Jonah has third lunch.','Vijay, Austin, John, Coleh, Sabrina, and Eli all have first lunch.','Mark, Nick, Steven, and Charlie all have second lunch.','Paul, Santiago, and Jonah all have third lunch.']
var lunchC = ['Mark has second lunch.','Nick has third lunch.','Isaac has first lunch.','Vijay has first lunch.','Paul has third lunch.','Santiago has second lunch.','Austin has first lunch.','Steven has third lunch.','John has second lunch.','Sabrina has third lunch.','Coleh has third lunch.','Eli has third lunch.','Charlie has third lunch.','Jonah has first lunch.','Isaac, Vijay, Austin, and Jonah all have first lunch.','Mark, Santiago, and John all have second lunch.','Nick, Paul, Steven, Sabrina, Coleh, Eli, and Charlie all have third lunch.']
var lunchD = ['Mark has first lunch.','Nick has first lunch.','Isaac has second lunch.','Vijay has second lunch.','Paul has first lunch.','Santiago has first lunch.','Austin has second lunch.','Steven has first lunch.','John has first lunch.','Sabrina has first lunch.','Coleh has first lunch.','Eli has first lunch.','Charlie has first lunch.','Jonah has third lunch.','Mark, Nick, Paul, Santiago, Steven, John, Sabrina, Coleh, Eli, and Charlie all have first lunch.', 'Isaac, Vijay, and Austin all have second lunch.','Only Jonah has third lunch. :(']
var lunchE = ['Mark has second lunch.','Nick has first lunch.','Isaac has first lunch.','Vijay has second lunch.','Paul has second lunch.','Santiago has second lunch.','Austin has second lunch.','Steven has second lunch.','John has second lunch.','Sabrina has second lunch.','Coleh has second lunch.','Eli has second lunch.','Charlie has second lunch.','Jonah has second lunch.','Nick and Isaac have first lunch.','Mark, Vijay, Paul, Santiago, Austin, Steven, John, Sabrina, Coleh, Eli, Charlie, and Jonah all have second lunch.','No one has thrid lunch.']
var lunchF = ['Mark has third lunch.','Nick has second lunch.','Isaac has third lunch.','Vijay has third lunch.','Paul has first lunch.','Santiago has second lunch.','Austin has first lunch.','Steven has first lunch.','John has second lunch.','Sabrina has third lunch.','Coleh has second lunch.','Eli has second lunch.','Charlie has first lunch.','Jonah has second lunch.','Paul, Steven, and Charlie all have first lunch.','Nick, Santiago, John, Coleh, Eli, and Jonah all have second lunch.','Mark, Isaac, Vijay, Austin, and Sabrina all have third lunch.']
var lunchG = ['Mark has first lunch.','Nick has second lunch.','Isaac has second lunch.','Vijay has third lunch.','Paul has second lunch.','Santiago has first lunch.','Austin has first lunch.','Steven has second lunch.','John has first lunch.','Sabrina has first lunch.','Coleh has first lunch','Eli has third lunch.','Charli has second lunch.','Jonah has second lunch.','Mark, Santiago, Austin, John, Sabrina, and Coleh all have first lunch.','Nick, Isaac, Paul, Steven, Charlie, and Jonah all have second lunch.','Vijay and Eli have third lunch.']
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth
   
});
bot.connect();
bot.on('ready', function (evt) {
    //sets status to be online and playing the game "with ;help"
    console.log('Connected');
    console.log('Logged in as: ');
    console.log(bot.username + ' - (' + bot.id + ')');
    bot.setPresence({ status: 'do not disturb', game: { name: 'A Game of Thrones' } });
});
console.log(lunchA[0]);
//daily announcement stuff
setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'this is a test so pls ignore it'
                   });
               
   }, 
   
   (new Date("Sun Apr 28 2019 20:33:36 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is April 30 (only 34 school days left) and the rotation is FGABC. ' + lunchA[14] + " " + lunchA[15] + " " + lunchA[16]
                   });
               
   }, 
   
   (new Date("Tue Apr 30 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 1st (only 33 school days left) and the rotation is DEFGA. ' + lunchF[14] + " " + lunchF[15] + " " + lunchF[16]
                   });
               
   }, 
   
   (new Date("Wed May 1 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 2nd (only 32 school days left) and the rotation is BCDEF. ' + lunchD[14] + " " + lunchD[15] + " " + lunchD[16]
                   });
               
   }, 
   
   (new Date("Thu May 2 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 3rd (only 31 school days left) and the rotation is GABCD. ' + lunchB[14] + " " + lunchB[15] + " " + lunchB[16] + " The NHS play is tonight at 7pm."
                   });
               
   }, 
   
   (new Date("Fri May 3 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 6th (only 30 school days left) and the rotation is EFGAB. ' + lunchG[14] + " " + lunchG[15] + " " + lunchG[16]
                   });
               
   }, 
   
   (new Date("Mon May 6 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 7th (only 29 school days left) and the rotation is CDEFG. ' + lunchE[14] + " " + lunchE[15] + " " + lunchE[16]
                   });
               
   }, 
   
   (new Date("Tue May 7 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 8th (only 28 school days left) and the rotation is ABCDE. ' + lunchC[14] + " " + lunchC[15] + " " + lunchC[16]
                   });
               
   }, 
   
   (new Date("Wed May 8 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 9th (only 27 school days left) and the rotation is FGABC. ' + lunchA[14] + " " + lunchA[15] + " " + lunchA[16] + " The NHS Chorus and Orchestra Concert is tonight at 7pm."
                   });
               
   }, 
   
   (new Date("Thu May 9 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 10th (only 26 school days left) and the rotation is DEFGA. ' + lunchF[14] + " " + lunchF[15] + " " + lunchF[16]
                   });
               
   }, 
   
   (new Date("Fri May 10 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 13th (only 25 school days left) and the rotation is BCDEF. ' + lunchD[14] + " " + lunchD[15] + " " + lunchD[16]
                   });
               
   }, 
   
   (new Date("Mon May 13 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 14th (only 24 school days left) and the rotation is GABCD. ' + lunchB[14] + " " + lunchB[15] + " " + lunchB[16]
                   });
               
   }, 
   
   (new Date("Tue May 14 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 15th (only 23 school days left) and the rotation is EFGAB. ' + lunchG[14] + " " + lunchG[15] + " " + lunchG[16] + " NHS Art Show Gala and Band Concert (Band Concert at 7pm)."
                   });
               
   }, 
   
   (new Date("Wed May 15 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 16th (only 22 school days left) and the rotation is CDEFG. ' + lunchE[14] + " " + lunchE[15] + " " + lunchE[16]
                   });
               
   }, 
   
   (new Date("Thu May 16 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 17th (only 21 school days left) and the rotation is ABCDE. ' + lunchC[14] + " " + lunchC[15] + " " + lunchC[16]
                   });
               
   }, 
   
   (new Date("Fri May 17 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 20th (only 20 school days left) and the rotation is FGABC. ' + lunchA[14] + " " + lunchA[15] + " " + lunchA[16]
                   });
               
   }, 
   
   (new Date("Mon May 20 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 21st (only 19 school days left) and the rotation is DEFGA. ' + lunchF[14] + " " + lunchF[15] + " " + lunchF[16]
                   });
               
   }, 
   
   (new Date("Tue May 21 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 22nd (only 18 school days left) and the rotation is BCDEF. ' + lunchF[14] + " " + lunchF[15] + " " + lunchF[16] + " NHS Cabaret and Friends of Music Awards Dinner at 6pm."
                   });
               
   }, 
   
   (new Date("Wed May 22 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 23rd (only 17 school days left) and the rotation is AEFG (Today is an ER day).'
                   });
               
   }, 
   
   (new Date("Thu May 23 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 24th (only 16 school days left) and the rotation is GABCD. ' + lunchB[14] + " " + lunchB[15] + " " + lunchB[16]
                   });
               
   }, 
   
   (new Date("Fri May 24 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 28th (only 15 school days left) and the rotation is EFGAB. ' + lunchG[14] + " " + lunchG[15] + " " + lunchG[16]
                   });
               
   }, 
   
   (new Date("Tue May 28 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 29th (only 14 school days left) and the rotation is CDEFG. ' + lunchE[14] + " " + lunchE[15] + " " + lunchE[16]
                   });
               
   }, 
   
   (new Date("Wed May 29 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 30th (only 13 school days left) and the rotation is ABCDE. ' + lunchC[14] + " " + lunchC[15] + " " + lunchC[16]
                   });
               
   }, 
   
   (new Date("Thu May 30 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is May 31st (only 12 school days left) and the rotation is FGABC. ' + lunchA[14] + " " + lunchA[15] + " " + lunchA[16] + " Senior directed show tonight at 7pm."
                   });
               
   }, 
   
   (new Date("Fri May 31 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is June 3rd (only 11 school days left) and the rotation is DEFGA. ' + lunchF[14] + " " + lunchF[15] + " " + lunchF[16] + " NHS chorus preformance at Graduation (5pm)."
                   });
               
   }, 
   
   (new Date("Mon June 3 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is June 4th (only 10 school days left) and the rotation is BCDEF. ' + lunchD[14] + " " + lunchD[15] + " " + lunchD[16] + " 1st day of MCAS science."
                   });
               
   }, 
   
   (new Date("Tue June 4 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is June 5th (only 9 school days left) and the rotation is GABCD. ' + lunchB[14] + " " + lunchB[15] + " " + lunchB[16] + " 2nd/last day of MCAS science."
                   });
               
   }, 
   
   (new Date("Wed June 5 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is June 6th (only 8 school days left) and the rotation is EFGAB. ' + lunchG[14] + " " + lunchG[15] + " " + lunchG[16]
                   });
               
   }, 
   
   (new Date("Thu June 6 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is June 7th (only 7 school days left) and the rotation is CDEFG. ' + lunchE[14] + " " + lunchE[15] + " " + lunchE[16]
                   });
               
   }, 
   
   (new Date("Fri June 7 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is June 10th (only 6 school days left) and the rotation is ABCDE. ' + lunchC[14] + " " + lunchC[15] + " " + lunchC[16]
                   });
               
   }, 
   
   (new Date("Mon June 10 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is June 11th (only 5 school days left) and the rotation is FGABC. ' + lunchA[14] + " " + lunchA[15] + " " + lunchA[16]
                   });
               
   }, 
   
   (new Date("Tue June 11 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is June 12th (only 4 school days left) and the rotation is DEFGA. ' + lunchF[14] + " " + lunchF[15] + " " + lunchF[16] + " Wellness Students: Please clean out your P.E. lockers"
                   });
               
   }, 
   
   (new Date("Wed June 12 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 
   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is June 13th (only 3 school days left) and the rotation is BCDEF. ' + lunchD[14] + " " + lunchD[15] + " " + lunchD[16] + " Wellness Students: Please clean out your P.E. lockers"
                   });
               
   }, 
   
   (new Date("Thu June 13 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is June 14th (only 2 school days left) and the rotation is GABCD. ' + lunchB[14] + " " + lunchB[15] + " " + lunchB[16] + " Wellness Students: Please clean out your P.E. lockers"
                   });
               
   }, 
   
   (new Date("Fri June 14 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is June 17th (only 1 school day left) and the rotation is EFGAB. ' + lunchG[14] + " " + lunchG[15] + " " + lunchG[16] + " Wellness Students: Please clean out your P.E. lockers"
                   });
               
   }, 
   
   (new Date("Mon June 17 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 

   setTimeout(function() {
    bot.sendMessage({
                       to: "587745524757561381",
                       message: 'Today is June 18th (Last day required to come to school!) and the rotation is CDEFG. ' + lunchE[14] + " " + lunchE[15] + " " + lunchE[16] + " Wellness Students: Please clean out your P.E. lockers"
                   });
               
   }, 
   
   (new Date("Tue June 18 2019 00:00:00 GMT-0400 (Eastern Daylight Time)")) 
   .getTime()  
   -
   Date.now() 
   ) 
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
           case 'lunchA_Mark':
           bot.sendMessage({
               to: channelID,
               message: lunchA[0]
           })
           console.log(lunchA[0]);
           break;
           case 'lunchA_Nick':
           bot.sendMessage({
               to: channelID,
               message: lunchA[1]
           })
           break;
           case 'lunchA_Isaac':
           bot.sendMessage({
               to: channelID,
               message: lunchA[2]
           })
           break;
           case 'lunchA_Vijay':
           bot.sendMessage({
               to: channelID,
               message: lunchA[3]
           })
           break;
           case 'lunchA_Paul':
           bot.sendMessage({
               to: channelID,
               message: lunchA[4]
           })
           break;
           case 'lunchA_Santiago':
           bot.sendMessage({
               to: channelID,
               message: lunchA[5]
           })
           break;
           case 'lunchA_Austin':
           bot.sendMessage({
               to: channelID,
               message: lunchA[6]
           })
           break;
           case 'lunchA_Steven':
           bot.sendMessage({
               to: channelID,
               message: lunchA[7]
           })
           break;
           case 'lunchA_John':
           bot.sendMessage({
               to: channelID,
               message: lunchA[8]
           })
           break;
           case 'lunchA_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: lunchA[9]
           })
           break;
           case 'lunchA_Coleh':
           bot.sendMessage({
               to: channelID,
               message: lunchA[10]
           })
           break;
           case 'lunchA_Eli':
           bot.sendMessage({
               to: channelID,
               message: lunchA[11]
           })
           break;
           case 'lunchA_Charlie':
           bot.sendMessage({
               to: channelID,
               message: lunchA[12]
           })
           break;
           case 'lunchA_Jonah':
           bot.sendMessage({
               to: channelID,
               message: lunchA[13]
           })
           break;
           case 'lunchA_1st':
           bot.sendMessage({
               to: channelID,
               message: lunchA[14]
           })
           break;
           case 'lunchA_2nd':
           bot.sendMessage({
               to: channelID,
               message: lunchA[15]
           })
           break;
           case 'lunchA_3rd':
           bot.sendMessage({
               to: channelID,
               message: lunchA[16]
           })
           break;
           case 'lunchB_Mark':
           bot.sendMessage({
               to: channelID,
               message: lunchB[0]
           })
           console.log(lunchA[0]);
           break;
           case 'lunchB_Nick':
           bot.sendMessage({
               to: channelID,
               message: lunchB[1]
           })
           break;
           case 'lunchB_Isaac':
           bot.sendMessage({
               to: channelID,
               message: lunchB[2]
           })
           break;
           case 'lunchB_Vijay':
           bot.sendMessage({
               to: channelID,
               message: lunchB[3]
           })
           break;
           case 'lunchB_Paul':
           bot.sendMessage({
               to: channelID,
               message: lunchB[4]
           })
           break;
           case 'lunchB_Santiago':
           bot.sendMessage({
               to: channelID,
               message: lunchB[5]
           })
           break;
           case 'lunchB_Austin':
           bot.sendMessage({
               to: channelID,
               message: lunchB[6]
           })
           break;
           case 'lunchB_Steven':
           bot.sendMessage({
               to: channelID,
               message: lunchB[7]
           })
           break;
           case 'lunchB_John':
           bot.sendMessage({
               to: channelID,
               message: lunchB[8]
           })
           break;
           case 'lunchB_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: lunchB[9]
           })
           break;
           case 'lunchB_Coleh':
           bot.sendMessage({
               to: channelID,
               message: lunchB[10]
           })
           break;
           case 'lunchB_Eli':
           bot.sendMessage({
               to: channelID,
               message: lunchB[11]
           })
           break;
           case 'lunchB_Charlie':
           bot.sendMessage({
               to: channelID,
               message: lunchB[12]
           })
           break;
           case 'lunchB_Jonah':
           bot.sendMessage({
               to: channelID,
               message: lunchB[13]
           })
           break;
           case 'lunchB_1st':
           bot.sendMessage({
               to: channelID,
               message: lunchB[14]
           })
           break;
           case 'lunchB_2nd':
           bot.sendMessage({
               to: channelID,
               message: lunchB[15]
           })
           break;
           case 'lunchB_3rd':
           bot.sendMessage({
               to: channelID,
               message: lunchB[16]
           })
           break;
           case 'lunchC_Mark':
           bot.sendMessage({
               to: channelID,
               message: lunchC[0]
           })
           console.log(lunchA[0]);
           break;
           case 'lunchC_Nick':
           bot.sendMessage({
               to: channelID,
               message: lunchC[1]
           })
           break;
           case 'lunchC_Isaac':
           bot.sendMessage({
               to: channelID,
               message: lunchC[2]
           })
           break;
           case 'lunchC_Vijay':
           bot.sendMessage({
               to: channelID,
               message: lunchC[3]
           })
           break;
           case 'lunchC_Paul':
           bot.sendMessage({
               to: channelID,
               message: lunchC[4]
           })
           break;
           case 'lunchC_Santiago':
           bot.sendMessage({
               to: channelID,
               message: lunchC[5]
           })
           break;
           case 'lunchC_Austin':
           bot.sendMessage({
               to: channelID,
               message: lunchC[6]
           })
           break;
           case 'lunchC_Steven':
           bot.sendMessage({
               to: channelID,
               message: lunchC[7]
           })
           break;
           case 'lunchC_John':
           bot.sendMessage({
               to: channelID,
               message: lunchC[8]
           })
           break;
           case 'lunchC_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: lunchC[9]
           })
           break;
           case 'lunchC_Coleh':
           bot.sendMessage({
               to: channelID,
               message: lunchC[10]
           })
           break;
           case 'lunchC_Eli':
           bot.sendMessage({
               to: channelID,
               message: lunchC[11]
           })
           break;
           case 'lunchC_Charlie':
           bot.sendMessage({
               to: channelID,
               message: lunchC[12]
           })
           break;
           case 'lunchC_Jonah':
           bot.sendMessage({
               to: channelID,
               message: lunchC[13]
           })
           break;
           case 'lunchC_1st':
           bot.sendMessage({
               to: channelID,
               message: lunchC[14]
           })
           break;
           case 'lunchC_2nd':
           bot.sendMessage({
               to: channelID,
               message: lunchC[15]
           })
           break;
           case 'lunchC_3rd':
           bot.sendMessage({
               to: channelID,
               message: lunchC[16]
           })
           break;
           case 'lunchD_Mark':
           bot.sendMessage({
               to: channelID,
               message: lunchD[0]
           })
           console.log(lunchA[0]);
           break;
           case 'lunchD_Nick':
           bot.sendMessage({
               to: channelID,
               message: lunchD[1]
           })
           break;
           case 'lunchD_Isaac':
           bot.sendMessage({
               to: channelID,
               message: lunchD[2]
           })
           break;
           case 'lunchD_Vijay':
           bot.sendMessage({
               to: channelID,
               message: lunchD[3]
           })
           break;
           case 'lunchD_Paul':
           bot.sendMessage({
               to: channelID,
               message: lunchD[4]
           })
           break;
           case 'lunchD_Santiago':
           bot.sendMessage({
               to: channelID,
               message: lunchD[5]
           })
           break;
           case 'lunchD_Austin':
           bot.sendMessage({
               to: channelID,
               message: lunchD[6]
           })
           break;
           case 'lunchD_Steven':
           bot.sendMessage({
               to: channelID,
               message: lunchD[7]
           })
           break;
           case 'lunchD_John':
           bot.sendMessage({
               to: channelID,
               message: lunchD[8]
           })
           break;
           case 'lunchD_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: lunchD[9]
           })
           break;
           case 'lunchD_Coleh':
           bot.sendMessage({
               to: channelID,
               message: lunchD[10]
           })
           break;
           case 'lunchD_Eli':
           bot.sendMessage({
               to: channelID,
               message: lunchD[11]
           })
           break;
           case 'lunchD_Charlie':
           bot.sendMessage({
               to: channelID,
               message: lunchD[12]
           })
           break;
           case 'lunchD_Jonah':
           bot.sendMessage({
               to: channelID,
               message: lunchD[13]
           })
           break;
           case 'lunchD_1st':
           bot.sendMessage({
               to: channelID,
               message: lunchD[14]
           })
           break;
           case 'lunchD_2nd':
           bot.sendMessage({
               to: channelID,
               message: lunchD[15]
           })
           break;
           case 'lunchD_3rd':
           bot.sendMessage({
               to: channelID,
               message: lunchD[16]
           })
           break;
           case 'lunchE_Mark':
           bot.sendMessage({
               to: channelID,
               message: lunchE[0]
           })
           console.log(lunchE[0]);
           break;
           case 'lunchE_Nick':
           bot.sendMessage({
               to: channelID,
               message: lunchE[1]
           })
           break;
           case 'lunchE_Isaac':
           bot.sendMessage({
               to: channelID,
               message: lunchE[2]
           })
           break;
           case 'lunchE_Vijay':
           bot.sendMessage({
               to: channelID,
               message: lunchE[3]
           })
           break;
           case 'lunchE_Paul':
           bot.sendMessage({
               to: channelID,
               message: lunchE[4]
           })
           break;
           case 'lunchE_Santiago':
           bot.sendMessage({
               to: channelID,
               message: lunchE[5]
           })
           break;
           case 'lunchE_Austin':
           bot.sendMessage({
               to: channelID,
               message: lunchE[6]
           })
           break;
           case 'lunchE_Steven':
           bot.sendMessage({
               to: channelID,
               message: lunchE[7]
           })
           break;
           case 'lunchE_John':
           bot.sendMessage({
               to: channelID,
               message: lunchE[8]
           })
           break;
           case 'lunchE_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: lunchE[9]
           })
           break;
           case 'lunchE_Coleh':
           bot.sendMessage({
               to: channelID,
               message: lunchE[10]
           })
           break;
           case 'lunchE_Eli':
           bot.sendMessage({
               to: channelID,
               message: lunchE[11]
           })
           break;
           case 'lunchE_Charlie':
           bot.sendMessage({
               to: channelID,
               message: lunchE[12]
           })
           break;
           case 'lunchE_Jonah':
           bot.sendMessage({
               to: channelID,
               message: lunchE[13]
           })
           break;
           case 'lunchE_1st':
           bot.sendMessage({
               to: channelID,
               message: lunchE[14]
           })
           break;
           case 'lunchE_2nd':
           bot.sendMessage({
               to: channelID,
               message: lunchE[15]
           })
           break;
           case 'lunchE_3rd':
           bot.sendMessage({
               to: channelID,
               message: lunchE[16]
           })
           break;
           case 'lunchF_Mark':
           bot.sendMessage({
               to: channelID,
               message: lunchF[0]
           })
           console.log(lunchF[0]);
           break;
           case 'lunchF_Nick':
           bot.sendMessage({
               to: channelID,
               message: lunchF[1]
           })
           break;
           case 'lunchF_Isaac':
           bot.sendMessage({
               to: channelID,
               message: lunchF[2]
           })
           break;
           case 'lunchF_Vijay':
           bot.sendMessage({
               to: channelID,
               message: lunchF[3]
           })
           break;
           case 'lunchF_Paul':
           bot.sendMessage({
               to: channelID,
               message: lunchF[4]
           })
           break;
           case 'lunchF_Santiago':
           bot.sendMessage({
               to: channelID,
               message: lunchF[5]
           })
           break;
           case 'lunchF_Austin':
           bot.sendMessage({
               to: channelID,
               message: lunchF[6]
           })
           break;
           case 'lunchF_Steven':
           bot.sendMessage({
               to: channelID,
               message: lunchF[7]
           })
           break;
           case 'lunchF_John':
           bot.sendMessage({
               to: channelID,
               message: lunchF[8]
           })
           break;
           case 'lunchF_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: lunchF[9]
           })
           break;
           case 'lunchF_Coleh':
           bot.sendMessage({
               to: channelID,
               message: lunchF[10]
           })
           break;
           case 'lunchF_Eli':
           bot.sendMessage({
               to: channelID,
               message: lunchF[11]
           })
           break;
           case 'lunchF_Charlie':
           bot.sendMessage({
               to: channelID,
               message: lunchF[12]
           })
           break;
           case 'lunchF_Jonah':
           bot.sendMessage({
               to: channelID,
               message: lunchF[13]
           })
           break;
           case 'lunchF_1st':
           bot.sendMessage({
               to: channelID,
               message: lunchF[14]
           })
           break;
           case 'lunchF_2nd':
           bot.sendMessage({
               to: channelID,
               message: lunchF[15]
           })
           break;
           case 'lunchF_3rd':
           bot.sendMessage({
               to: channelID,
               message: lunchF[16]
           })
           break;
           case 'lunchG_Mark':
           bot.sendMessage({
               to: channelID,
               message: lunchG[0]
           })
           console.log(lunchG[0]);
           break;
           case 'lunchG_Nick':
           bot.sendMessage({
               to: channelID,
               message: lunchG[1]
           })
           break;
           case 'lunchG_Isaac':
           bot.sendMessage({
               to: channelID,
               message: lunchG[2]
           })
           break;
           case 'lunchG_Vijay':
           bot.sendMessage({
               to: channelID,
               message: lunchG[3]
           })
           break;
           case 'lunchG_Paul':
           bot.sendMessage({
               to: channelID,
               message: lunchG[4]
           })
           break;
           case 'lunchG_Santiago':
           bot.sendMessage({
               to: channelID,
               message: lunchG[5]
           })
           break;
           case 'lunchG_Austin':
           bot.sendMessage({
               to: channelID,
               message: lunchG[6]
           })
           break;
           case 'lunchG_Steven':
           bot.sendMessage({
               to: channelID,
               message: lunchG[7]
           })
           break;
           case 'lunchG_John':
           bot.sendMessage({
               to: channelID,
               message: lunchG[8]
           })
           break;
           case 'lunchG_Sabrina':
           bot.sendMessage({
               to: channelID,
               message: lunchG[9]
           })
           break;
           case 'lunchG_Coleh':
           bot.sendMessage({
               to: channelID,
               message: lunchG[10]
           })
           break;
           case 'lunchG_Eli':
           bot.sendMessage({
               to: channelID,
               message: lunchG[11]
           })
           break;
           case 'lunchG_Charlie':
           bot.sendMessage({
               to: channelID,
               message: lunchG[12]
           })
           break;
           case 'lunchG_Jonah':
           bot.sendMessage({
               to: channelID,
               message: lunchG[13]
           })
           break;
           case 'lunchG_1st':
           bot.sendMessage({
               to: channelID,
               message: lunchG[14]
           })
           break;
           case 'lunchG_2nd':
           bot.sendMessage({
               to: channelID,
               message: lunchG[15]
           })
           break;
           case 'lunchG_3rd':
           bot.sendMessage({
               to: channelID,
               message: lunchG[16]
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
            //family stuff
            case 'breakfast':
            bot.sendMessage({
                to: '387014509409075210',
                message: args[0]
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
                message: "case " + "'" + args[0] + "'" + ": \n" + "var custom = Math.ceil(Math.random() * " + args[1] + "); \n" + "var customList = [' '," + args[2] + '] \n' + " bot.sendMessage({ \n" + 'to: channelID, \n' + ' message: customList[custom] \n' + '}); \n' + 'break;'
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
            case 'superstars': 
bot.sendMessage({ 
to: channelID, 
message: 'https://cdn.discordapp.com/emojis/562129093181702165.gif?v=1' 
 }); 
break;
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
    bot.on('message', function(user, userID, channelID, message, event) {
        if (message.includes("🆙  |  ")) {
            bot.deleteMessage({
                channelID: channelID,
                  messageID: event.d.id

            },console.log);
        }
    });
});
//Explains why the bot crashed
bot.on('disconnect', function (erMsg, code) {
    console.log('Bot disconnected from Discord with code ' + code + ' for reason: ' + erMsg);
});