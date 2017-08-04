var today = new Date();
var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];  
var printDay = "Today is: "+ day[today.getDay()];
var printTime = "Current time is: " + today.toLocaleTimeString();

console.log(printDay);
console.log(printTime);

///Make a date object for todays date then print the date
let today = new Date();
console.log(today.toLocaleDateString());

//Make a date object containing yesterdays date then print the date
let yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
console.log(yesterday.toLocaleDateString());

//Make a date object containing tomorrows date then print the date
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow.toLocaleDateString());

