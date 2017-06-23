var assert = function(actual, expected){
  if(expected != actual){
    throw {actual: actual, expected: expected};
  }else{
    console.log("Success", {actual: actual, expected: expected});
  }
};

var describe = function(message, testFunc){
    try{
        testFunc();
    } catch(err){
        console.log("Test group Failed", err);
    }
};

var add = function(a,b){
  return a+b;
};

var sub = function(a,b){
    return a-b;
};

var div = function(a,b){
  return a / b;  
};

var mod = function(a,b){
  return a % b;  
};

var mult = function(a,b){
  return a * b;  
};

describe("Test calculator", function(){
    assert(add(2,3), 5);
    assert(sub(2,3), -1);
    assert(div(9,3), 3);
    assert(mod(4,2), 0);
    assert(mult(2,2), 4);
})