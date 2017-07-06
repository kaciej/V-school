let sleepIn = (weekday, vacation) => {
    let arr = ["Monday", "Tuseday", "Wednesday", "Thursday", "Friday", "Satuday", "Sunday"]
        if(arr.indexOf(weekday) === -1){
            throw "That's not a weekday."
    }else if(weekday.toLowerCase().split("").indexOf("s") === 0 || vacation){
        return true;
    }else{
        return false;
    }
}


module.exports = sleepIn;