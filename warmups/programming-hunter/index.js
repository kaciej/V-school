//https://coursework.vschool.io/matching-words/

let riddle = "Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas."

let matchingWords = (str) => {
    str = str.toLowerCase().split(" ");
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        for (let x = 0; x < str.length; x++) {
            if (str[i] == str[x] && x != i){
              if(arr.includes(str[i]) == false){
                  arr.push(str[i]);
              }  
            }
            
        }
    }
    return arr;
};

module.exports = matchingWords;

console.log(matchingWords(riddle));
