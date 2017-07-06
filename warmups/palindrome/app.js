var removeSpecialCharacters = function(str){
    var result = "";
    var alpha = ("abcdefghijklmnopqrstuvwxyz");
    for(var i = 0; i < str.length; i++){
        if(alpha.includes(str[i]) == true){
            result += str[i];
        }
    }
    return result;
};

var isPalindrome = function(str){
    var str = str.toLowerCase();
    str = removeSpecialCharacters(str);
    console.log(str);
    var arrStr = str.split('');
    var reverseArr = arrStr.reverse();
    var reverseStr = arrStr.join("");
    if(reverseStr == str){
        return true;
    }else {
        return false;
    }
    
};


module.exports = isPalindrome;