let converter = require('number-to-words');


let alarmClock = (time) => {
    let arr = time.split(":");
    let hourNum = Number(arr[0] % 12);
    let minNum = Number(arr[1]);
    let meridiem = "";
    if(Number(arr[0]) >= 12){
        meridiem = "pm"
    }else if(Number(arr[0]) < 12){
        meridiem = "am"
    }

   if(time.substring(2,3) !== ":" || hourNum > 24 && hourNum < 0){
       throw "not valid input"
   }else if(time === "00:00"){
       return "It's midnight"
    }

    let zero = ""
    if(arr[1].indexOf(0) == 0){
        
    }

    if(minNum == 00){
        return `It's ${converter.toWords(hourNum)} ${meridiem}.`
    }else {
        return `It's ${converter.toWords(hourNum)} ${converter.toWords(minNum)} ${meridiem}`
    }

}

module.exports = alarmClock;

// alarmClock("13:39")