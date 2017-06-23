var readlineSync = require('readline-sync');

var hasKey = false;

var printRoom = function(){
    if(hasKey == true){
        console.log("You are in a room with a door.");
    }else{
        console.log("You are in a room there is a key on the ground and your phone is ringing.");
    }
}

console.log("Commands are look -> To look, answer -> To answer it, grab -> To grab, open -> To open things");

while(true) {
    var input = readlineSync.question("What would do you want to do? ");
    input = input.toLowerCase();
    console.log(input);
    if(input.includes("look")){
        printRoom();
    }else if(input.includes("answer")){
        console.log("You just got eaten by a zombie. Pay attention and get off your phone next time, Dufus.");
        break;
    }else if(input.includes("grab") && input.includes("key")){
        console.log("You grabbed the key");
        hasKey = true;
    }else if(input.includes("grab")){
        console.log("Dummy you got to grab something");
    }else if(input.includes("open") && input.includes("door") && hasKey){
        console.log("You get to leave wahoooo!!");
        break;
    }else if(input.includes("open") && input.includes("door") && !hasKey){
        console.log("You ain't got no key silly!");
    }else {
        console.log("Commands are look -> To look, answer -> To answer things, grab -> To grab, open -> To open things");
    }
}

