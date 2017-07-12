//https://coursework.vschool.io/balance-parenthesis/

let balanceParens = (str) => {
    let arr = [];
   for(let i = 0; i < str.length; i++){
       if(str[i] == "("){
        arr.push("(")
       }else if(str[i] == ")"){
           arr.pop("(");
       }
   }
   if(arr.length == 0){
       return true;
   }else {return false;}
}

module.exports = balanceParens;

console.log(balanceParens("((sometext))"));