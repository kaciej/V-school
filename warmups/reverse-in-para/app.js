// Given a string with a single set of parentheses, return a new string with 
// the content of the parentheses reversed:

let reverseInPara = (str) => {
    let isPara = false;
    let output = "";
    let reverse = "";
    for(let i = 0; i < str.length; i++){
        switch(isPara){
            case true:
                if(str[i] === ")"){
                    isPara = false;
                    output += reverse.split("").reverse().join("");
                    reverse = "";
                } else {
                    reverse += str[i]
                }
                break;
            case false:
                if(str[i] === "("){
                    isPara = true;
                }else {
                    output += str[i]
           }
        }
    }
    return output;
}

//or......
// let revPara = (str) => {
//   para = str.match(/\(([^)]+)\)/)[1];
//   para = para.split(‘’).reverse().join(‘’);
//   let beg = str.substring(0, str.indexOf(“(”));
//   let index = str.indexOf(“)”);
//   let end = str.substring(str.length, (str.indexOf(“)”)) + 1);
//   newStr = beg + para + end;
//   console.log(newStr);
//   return newStr;
// }

//or.....
// let reverse = (str) => {
//     let result = [];
//     let rev = [];

//     str = str.split("(");

//     result.push(str[0]);
//     str.splice(0, 1)
//     str = str.join("");
//     str = str.split(")");
//     rev.push(str[0]);

//     rev = rev
//         .toString()
//         .split("")
//         .reverse()
//         .join("");
//     // rev=rev.split("").reverse().join("");

//     result.push(rev)
//     result.push(str[1]);

//     result = result.join("")

//     return result;

// }

module.exports = reverseInPara;
