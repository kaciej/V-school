// https://coursework.vschool.io/longest-substring/

let checkIfUnique = (str) => {
    //will return true if string contains NO duplicates
    let chars = {
    } 
    for(let i = 0; i < str.length; i++){
        if(!chars[str[i]]){
            chars[str[i]] = str[i];
        }else{
            return false;
        }
       
    }
     return true;
     //will return false if the string conatains duplicates
}

let genSubStr = (str) => {
    let longestSoFar = "";

    for(let i = 0; i < str.length; i++){
        for(let x = i + 1; x < str.length +1; x++){
            let subStr = str.slice(i, x);
            if(subStr.length > longestSoFar.length && checkIfUnique(subStr)){
                longestSoFar = subStr;
            }
        }
    }
    return longestSoFar;
}

console.log(genSubStr("hello"));

let someObj = {};
someObj["name"] = "test";

console.log(someObj.hasOwnProperty("name"));