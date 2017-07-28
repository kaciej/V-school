let readlineSync = require('readline-sync');

let cal = require("./cal.js");
let sub = cal.sub;
let add = cal.add;
let mult = cal.mult;
let div = cal.div;

let num1 = readlineSync.question("Give me one number: ");
num1 = Number(num1);
let num2 = readlineSync.question("Give me another number: ");
num2 = Number(num2);
let handle = readlineSync.question("Type 'add' to add, 'sub' to subtract, 'mult' to multiply, and 'div' to divide those numbers: ");

console.log(`Your Answer is: ${cal[handle](num1, num2)}`);