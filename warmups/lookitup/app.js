//let readlineSync = require('readline-sync');
//
//let inputWord = readlineSync.question("Enter a word you'd like to add and a definition");

let dict = {};

let addWord = (word, def) => {
    word = word.toLocaleLowerCase();
    if(dict.hasOwnProperty(word) == false){
     dict[word] = def;
        return true;
    }else{
        return false;
    }
    
}

let lookItUp = (word) => {
    return dict[word];
}

module.exports = {
    addWord,
    lookItUp
};