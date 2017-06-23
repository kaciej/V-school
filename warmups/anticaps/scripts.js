//https://coursework.vschool.io/warmup-anti-caps/

var anticaps = function (str) {
    var newStr = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            newStr += str[i].toUpperCase();
        } else if (str[i] === str[i].toUpperCase()){
            newStr += str[i].toLowerCase();
        }
    }
    return newStr;
}

console.log(anticaps("HeLLo"));