let robbersLang = (str) => {
    let vowels = "aeiou";
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        let isVowel= false;
        for(let x = 0; x < vowels.length; x++){
            if(str[i] === vowels[x]){
                isVowel = true;
                newStr += str[i];
                break;
            } 
        }
       if(isVowel == false){
           newStr += str[i] + "o" + str[i];
       }  
    }
    return newStr;
}

module.exports = robbersLang;

console.log(robbersLang("hello"));