let getFactors = (num) => {
    let count= 1;
for(let i = 1; i <= num / 2; i++){
 if(num % i === 0){
     count ++;
    }
}
//   if(count === 2){
//       return "prime";
//   } else {
//       return count;
//   }
//trinary
return count === 2 ? "prime" : count;

};

module.exports = getFactors;