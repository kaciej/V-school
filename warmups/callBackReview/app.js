var path = function(path1, path2){
  var userinput = "path1";
  if(userinput == "path1"){
    path1();
  } else{
    path2();
  }
};

path(function(){
  console.log("You choose path 1.");
},
    function(){
  console.log("You're now on path 2.");
});