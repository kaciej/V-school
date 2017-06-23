var squareNum = function (num) {
    return num * num;
};

console.log(squareNum(4));

var squareRoot = function (num) {
    return Math.sqrt(num);
};

console.log(squareRoot(4));

var arrayNums = [1, 3, 4, 7, 10];

var arrayTotal = function (arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

console.log(arrayTotal(arrayNums));

var largest = function(arr){
    var biggon= 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > biggon){
            biggon = arr[i];
        }
    }
    return biggon;
};

console.log(largest(arrayNums));