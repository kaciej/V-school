function add(num1, num2) {
    return num1+ num2;
}
console.log(add(1, 2));

function biggest(num1, num2, num3) {
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3){
        return num2;
    }else {
        return num3;
    }
}

console.log(biggest(1,2,3));

var whatIsIt = function(p1){
    if(p1 % 2 === 0){
        return("The string is even");
    }else {
        return("The string is odd");
    }
}

console.log(whatIsIt(4));

var words = function(str){
    if(str.length <= 20){
        return str + str;
    }else {
        var half = str.substr(0,(str.lenght/2));
        return(half);
    }
}

console.log(words("so many many many ones ones ones"));