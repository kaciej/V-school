var today = new Date();
var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];  
var printDay = "Today is: "+ day[today.getDay()];
var printTime = "Current time is: " + today.toLocaleTimeString();

console.log(printDay);
console.log(printTime);

