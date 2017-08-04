let thisDay = new Date();
let day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let month = ["January", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let today = `Today is ${day[thisDay.getDay()]} ${month[thisDay.getMonth()]} ${thisDay.getDate()} ${thisDay.getFullYear()}`;
let yesterday = `Yesterday was ${day[thisDay.getDay() - 1]} ${month[thisDay.getMonth()]} ${thisDay.getDate() - 1} ${thisDay.getFullYear()}`;

console.log(today);
console.log(yesterday);


// //OR
// let today = new Date();
// console.log(today.toLocaleDateString());

// //Make a date object containing yesterdays date then print the date
// let yesterday = new Date();
// yesterday.setDate(today.getDate() - 1);
// console.log(yesterday.toLocaleDateString());

// //Make a date object containing tomorrows date then print the date
// let tomorrow = new Date();
// tomorrow.setDate(today.getDate() + 1);
// console.log(tomorrow.toLocaleDateString());
