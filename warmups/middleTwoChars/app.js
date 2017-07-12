// Given a string of even length, return a string made of the middle two chars,
// so the string ‘string’ yields ‘ri’. The string length will be at least 2.

let midTwoChars = (str) => {
    if(str.length % 2 === 1){
        throw "String is odd";
    }else if (str.length == 0){
        throw "String is empty";
    }else {
        return str.substr(str.length / 2 -1 , 2);
    }
   
}

module.exports = midTwoChars;

console.log(midTwoChars("bubble"));