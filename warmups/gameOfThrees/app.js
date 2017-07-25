// First, you mash in a random large number to start with. Then, repeatedly do the following:
// If the number is divisible by 3, divide it by 3.
// If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
// The game stops when you reach "1".
// While the game was originally a race against myself in order to hone quick math reflexes, it also poses an opportunity for some interesting programming challenges. 
// Today, the challenge is to create a program that "plays" the Game of Threes.


// With a While Loop
let readlineSync = require('readline-sync');

let gameOfThreesLoop = (num) => {
    while(num != 1) {
        if(num % 3 === 0){
            num = num / 3;
            console.log(`Divided number by three ${num}`)
        }else if((num + 1) % 3 === 0) {
            num = (num + 1) / 3;
            console.log(`Added one to the number then divided by three ${num}`)
        }else if((num - 1) % 3 === 0) {
             num = (num -1) /3 ;
            console.log(`Subtracted one from the number then divided by three ${num}`)
        }
    }
    console.log(`You did it the number is ${num}`)
}
let userInput = readlineSync.question("Input any number: ");


//done with recursion
let gameOfThree = (num) => {
  //it has to have a stopping point (BASE CASE)
  //it has call itself (RECURSION)

  if (num === 1) {
    console.log("The End");
    return 1
  } else if(num % 3 === 0){
    console.log("Divided by 3");
    gameOfThree(num / 3)
  } else if ((num - 1) % 3 === 0){
    console.log("Subtracted 1");
    gameOfThree(num - 1);
  } else {
    console.log("Added 1");
    gameOfThree(num + 1);
  }
}

gameOfThree(Number(readlineSync.question("Number: ")));



