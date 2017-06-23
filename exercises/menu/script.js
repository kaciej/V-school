var menu = [{
    name: "egg sandwhich",
    cost: 8,
    ing:["egg", "bread", "cheese"]
}];

var Dish = function(name, cost, ing){
    this.name = name;
    this.cost = cost;
    this.ing = [];
    this.print = function(){
        console.log(this.name + " " + this.cost + " " + this.ing)
    }
}

var smokin = new Dish("Smokin", 9, ["smoked pork", "smoked gouda", "onions", "bun"]);
var garden = new Dish("Garden", 6, ["none", "none", "oniow, tomato, avacodo, spinach", "9-grain"]);
var traditional = new Dish("Traditional",6, ["ham", "american", "none", "sourdough"]);

menu.push(smokin, garden, traditional);

console.log(menu);