let vowelSeparator = (str) => {
   str = str.split("");
   let result = {
       noVowels: "",
       vowels: ""
   }
   for(let i = 0; i < str.length; i++){
        if("aeiou".includes(str[i])){
            result.vowels += str[i];
        } else if (str[i] !== " "){
            result.noVowels += str[i];
        }
   }
 return result
}

module.exports= vowelSeparator;

