//write a function called isODD
//var isOdd = function(num1){
////return true is the number is true
//    if(num1 % 2 === 0){
//        return(false);
////return false if the number is even
//    }else {
//        return(true);
//    }
//}
//
//console.log(isOdd(11))


//var isOdd = function(num1){
//    return num1 % 2 === 1;
//}
//
//console.log(isOdd(10));

//--------------------------------------------

//wirte a funtion that returns a negative 
//if its not negative return the number as is

//var negative = function(num){
//    if(num > 0){
//        return -num;
//    }else{
//        return num;
//    }
//}
//
//console.log(negative(10))
//----------------------------------------------

//get an array
//return it in ***reverse*** use a method!!

//var arr = [1,2,3,4,5,6,7];
//
//var reverseArrayEasy = function(arr){
//    return arr.reverse();
//}
//
//console.log(reverseArrayEasy(arr));

//var reversedArr = [];
//
//var reverseArrayHard = function(nums){
//    for(var i = nums.length -1; i >= 0; i--){
//         reversedArr.push(nums[i]);
//    }
//}
//
//reverseArrayHard(arr);
//console.log(reversedArr);

//__________________________________________________
/////////////NESTED LOOPS///////////////////////////

//loop through an string
//loop through an array
//compare and see fi they are equal

//var str = "nested fOrlOOps"
//
//
//var vowelCount = function(word){
//    var vowels = ["a", "e", "i", "o", "u"];
//    var count = 0;
//    var newStr = str.toLowerCase();
//    for(var i = 0; i < newStr.length; i++){
//        for(var x = 0; x < vowels.length; x++){
//            if(newStr[i] === vowels[x]){
//                count ++;
//            }
//        }
//    }
//    return count;
//}
//
//console.log(vowelCount(str));
//_______________________________________________________


//var fruits = ["apples", "orages", "bannas", "grapes"];
//
//var fruitBag = function(arr){
//    var count = 0;
//    var fridge = ["grapes", "taters", "mango", "apples"];
//    for(var i = 0; i < arr.length; i++){
//        if(fridge.includes(arr[i])){
//            count++;
//        }
//    }
//    return count;
//}
//
//console.log(fruitBag(fruits));
//------------------------------------------------------

