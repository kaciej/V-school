//https://coursework.vschool.io/caeser-cipher/

var originalPhrase = "did this work";

var inputPhrase = originalPhrase.toLowerCase();

var encryptedMessage = "";

var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var encrypt = function (strA, alpha, num) {
    for (var i = 0; i < strA.length; i++) {
        for (var x = 0; x < alpha.length; x++) {
            if (strA[i] === alpha[x]) {
                if (x + num >= 26) {
                    var realIndex = (x + num) % 26;
                    var realOutput = alpha[realIndex];
                    encryptedMessage += realOutput;
                } else {
                    if (strA[i] === alpha[x]) {
                        var t = alpha[x + num];
                        encryptedMessage += t;
                    }
                }
            }
        }

    }
    return encryptedMessage;
}

console.log(encrypt(inputPhrase, alpha, 27));

var output = "";

var inputPhrase = str.toLowerCase();

for (var i = 0; i < str.length; i++) {
    var index = alpha.indexOf(str[i]);
    if (index !== -1) {
        index += key
        index = index % alpha.length;
        if (index < 0) {
            index += alpha.length;
        }
        output += str[i];
    } else {
        output += str[i];
    }
}
return output;
}

var encryptedStr = cipher("here is the phrase", 3);
console.log(encryptedStr);
var decryptedStr = cipher(encryptedStr, -3);
console.log(decryptedStr)


