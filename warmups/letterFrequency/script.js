//https://coursework.vschool.io/letter-frequency/

var phrase = "bubble bottom jeans";


var letterFreq = function(str){
    var output = {};
    for(var i = 0; i<str.length; i++){
        if(output.hasOwnProperty(str[i])){
            output[str[i]] ++;
        }else{
            output[str[i]] = 1;
        }
    }
     return output;   
};

console.log(letterFreq(phrase));

//var noDups = function(str){
//    var output = {};
//    var newStr = "";
//    for(var i = 0; i<str.length; i++){
//        if(str[i] = output.hasOwnProperty(str[i])){
//            output[str[i]] ++;
//        }else{
//            output[str[i]] = 1;
//        }
//    }
//    for(var i = 0; i<)
//        if(output[str[i]] > 1){
//        newStr += output[str[i]];
//    }
//        return newStr;
//};
//
////console.log(noDups(phrase));