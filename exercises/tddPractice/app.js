// Given two non-negative int values, return true if they have the same last digit,
// such as with 27 and 57. Note that the % 'mod' operator computes remainders,
// so 17 % 10 is 7.

var lastTwo = function(num1, num2){
    if(num1 % 10 == num2 % 10){
        return true;
    }else{
        return false;
    }
}; 

/// Given a string, return a version without the first and last char, so 'Hello' yields 'ell'.
var chopped = function(str){
   return str.substring(1, str.length -1);
}

module.exports = {
    lastTwo: lastTwo,
    chopped: chopped
};