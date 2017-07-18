//Given a string and a positive integer `n` , write a recursive function that returns
//that string concatenated with itself `n` times.

let recursiveRpt = (str, count) => {
    if(count < 0){
        throw "Negative number";
    }else if(count === 0){
        throw "Count is a zero";
    }else if(str === ""){
        throw "String can't be empty"
    }else if (count == 1){
        return str;
    }else{
        return str + recursiveRpt(str, count-1);
    }
}
console.log(recursiveRpt("ya",2));
module.exports = recursiveRpt;