//var students = ["john", "jacob", "jingle", "himer"];
//
//students.forEach(function(item){
//    console.log(item);
//});

var nums = [1,2,3,5,10,-4,16, 0];
//
//var evens = nums.filter(function(item){
//    return item % 2 === 0;
//});
//
//console.log(evens);

var smallFirst = nums.sort(function(a, b){
    return a - b;
});

console.log(smallFirst)