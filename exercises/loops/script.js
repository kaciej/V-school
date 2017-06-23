//var str = "Here is a string";
//
//var individual = function(str){
//    for(var i = 0; i < str.length; i++){
//        console.log(str[i])
//    }
//}
//
//individual(str);

//var str = "this is the string";
//
//var firstOccur = function (str, char) {
//    var exists = false;
//    for (var i = 0; i < str.length; i++) {
//        if (str[i] === char) {
//            exists = true;
//            console.log(str.indexOf(char));
//            break;
//        }
//    }
//    if (exists == false) {
//        console.log("Wasn't found");
//    }
//}
//
//firstOccur(str, "f");

//var numbers = [1, 4, 3, 13, 85];
//
//var fourtyTwo = function (nums) {
//    for (var i = 0; i < nums.length; i++) {
//        if (nums[i] === 42) {
//            return "42";
//        }
//    }
//    return "notfound";
//}
//
//console.log(fourtyTwo(numbers));

var numbers = [3, 4, 6, 53, 10, 19, 20, 12]

var smallOfTen = function (nums) {
    if (nums.length !== 10) {
        return "Got to be 10 numbers";
    }
    var smallest = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < smallest) {
            smallest = nums[i];
        }
    }
    return smallest;
}

console.log(smallOfTen(numbers));