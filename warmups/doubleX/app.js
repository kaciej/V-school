let doublex = (str) => {
    str = str.toLowerCase();
    let firstX = str.indexOf("x");
    let check = firstX + 1;
    if (str[check] == "x") {
        return true;
    } else {
        return false;
    }
}


module.exports = doublex;