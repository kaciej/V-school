let kacie = {
    name: "Kacie",
    isSleeping: true,
}

let makequery = (obj) => {
    let result = "?";
    for(let key in obj){
        result += key;
        result += "=";
        result += obj[key];
        result += "&";
    }
    return result;
};

console.log(makequery(kacie));