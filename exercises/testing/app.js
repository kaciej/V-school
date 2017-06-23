var add = function (a, b) {
    return a + b;
};

var sub = function (a, b) {
    return a - b;
};

var div = function (a, b) {
    return a / b;
};

var mult = function (a, b) {
    return a * b;
};

var mod = function (a, b) {
    return a % b;
};

module.exports = {
    add: add,
    sub: sub,
    div: div,
    mult: mult,
    mod: mod
};