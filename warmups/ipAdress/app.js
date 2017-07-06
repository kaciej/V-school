
let ipTest = (str) => {
    strParts = str.split(".");
    if(strParts.length !== 4){
        throw "invalid ip address";
    }
    for(let i = 0; i < strParts.length; i++){
        if(Number(strParts[i]) ==  NaN){
             throw "invalid ip address";
        }else if(Number(strParts[i]) > 250 || Number(strParts[i] < 0)){
            throw "invalid ip address";
        }
    }
    if(str.legnth < 7 || str.length > 15){
        throw "invalid ip address";
    }
    return true;
}

module.exports = ipTest;