//https://coursework.vschool.io/03-string-manipulation/

var readlineSync = require('readline-sync');

//var color = readlineSync.question("What is your favotire color? ");
//console.log("Your favorite color is " + color.toUpperCase());
//
//var firstName = readlineSync.question("What is your first name? ");
//var lastName = readlineSync.question("What is your last name? ");
//console.log("Your full name is " + firstName.concat(lastName));
//
//var letterCount = readlineSync.question("What is you dogs name? ");
//console.log("There are " + letterCount.length + " in your dogs name");

var message = readlineSync.question("What's your best day? ");

var halfMessage = function(message){
    if(message.length > 10){
       return message.substr(message.length /2);
    }else{
        return message
    }
}

//console.log(halfMessage(message));



console.log(message)

var index = readlineSync.question("what index do you want to start? ");
console.log(message.slice(index));


