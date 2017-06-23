var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.slice(3);

fruit.slice(1);

fruit.indexOf("orange");

fruit.push(1);

vegetables.push(3);

var food = fruit.concat(vegetables);

food.splice(4, 2);

food.reverse();

console.log(food.join(", "));