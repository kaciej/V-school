var userinput = prompt("name please");
var startingPoint = parseInt(prompt("Give me a number"));

var changeStr = function (str) {
    if (str.length >= 20) {
        return str.substr(str.length / 2);
    } else {
        return str;
    }
}

console.log(changeStr(userinput));
console.log(userinput.toUpperCase());
var chracterCount = userinput.length;

//var changeStr = function(str) {
//    return str.substr(startingPoint);
//}
//
//console.log(changeStr(userinput));