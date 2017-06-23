//https://coursework.vschool.io/count-code/

var countCode = function(str){
    var count = 0;
   for(var i =0; i < str.length; i++){
       if(str.substring(i, i + 2) == "co" && str[i + 3] == "e"){
           count++;
       }
   } 
    return count;
};

console.log(countCode("aaacoeeggcoreg"));