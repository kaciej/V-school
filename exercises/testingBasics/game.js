//Character Video Game PLayer
//name -> String
//health ->
//inv ->

//takedamage -> subtract damage form health
//healDamage -> add health to health
//addItemToInventory -> Add String to inv []


var assert = function(actual, expected){
  if(expected != actual){
    throw {actual: actual, expected: expected};
  }else{
    console.log("Success", {actual: actual, expected: expected});
  }
};

var describe = function(message, testFunc){
    console.log(message);
    try{
        testFunc();
    } catch(err){
        console.log("Test group Failed", err);
    }
};

var Player = function(name, health, inv){
    this.name = name,
    this.health = health || 100,
    this.inv = inv || [],
    this.takeDamage = function(dam){
      this.takeDamage += dam;  
    }
    this.healthDamage = function(dam){
        this.healthDamage += dam;
    }
    this.addItem = function(item){
        this.addItem.push(item);
    }
};


describe("Test character has attributes", function(){
    var player = new Player("testPlayerName");
    assert(player.name, "testPlayerName");
    assert(player.health, 100);
    assert(player.inv.length, 0);
});
    
describe("Test Character Methods", function(){
    var player = new Player("testPlayerName");
    player.takeDamage(30);
    assert(player.health, 70);
    player.healthDamage(25);
    assert(player.health, 95);
    player.addItem("Sword");
    assert(player.inv.length, 1);
});