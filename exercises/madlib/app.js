var genNouns = function(){
  var nouns = [];
  for(var i = 0; i < 5; i++){
    nouns.push(prompt("Please input a noun"));
  }
  return nouns;
};

var genVerbs = function(){
  var verbs = [];
  for(var i = 0; i < 5; i++){
    verbs.push(prompt("Please input a verb"));
  }
  return verbs;
};

var genAdjectives = function(){
  var adjective = [];
  for(var i = 0; i < 5; i++){
    adjective.push(prompt("Please input an adjective"));
  }
  return adjective;
};


var madlib = function(noun, adjective, verb) {
  console.log(`I have a ${adjective[0]} pet named ${noun[0]}  she likes to ${verb[0]} in the park.
When ${noun[1]}  gets ${adjective[3]} it makes for a really bad ${verb[2]}.
If you ${verb[3]} it the ${noun[2]} say goodbye to your ${adjective[2]} job.
On a ${adjective[1]} day ${noun[4]} makes a ${verb[1]}  all day long.
In the ${adjective[4]} case of ${noun[3]}  this old man ${verb[4]} into a baby.`)
};

madlib(genNouns(), genAdjectives(), genVerbs());
