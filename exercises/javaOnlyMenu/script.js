var title = document.createElement("h1");
var target = document.querySelector(".title-space");
title.innerHTML = "EGGS ELEVATED";
target.appendChild(title);


var menu = [{
        name: "Egg platter",
        cost: 6,
        ing: ["egg", "toast", "hashbrowns"]
},
    {
        name: "Pancakes",
        cost: 4,
        ing: ["3 small cakes"]
},
    {
        name: "Stuffed French Toast",
        cost: 6,
        ing: ["sourdough", "sausage", "cream-cheese", "maple-syrup"]
}

];

var Dish = function (name, cost, ing) {
    this.name = name;
    this.cost = cost;
    this.ing = ing || [];
    this.print = function () {
        console.log(this.name + " " + this.cost + " " + this.ing)
    }
}

menu.push(new Dish("Smokin", 9, ["smoked pork", "smoked gouda", "onions", "bun"]));
menu.push(new Dish("Garden", 6, ["none", "none", "oniow, tomato, avacodo, spinach", "9-grain"]));
menu.push(new Dish("Traditional", 6, ["ham", "american", "none", "sourdough"]));

var addItemToDOM = function (name, cost, ing) {
    //col-md-4
    var outer = document.createElement("div");
    outer.setAttribute("class", "col-md-4", );
    //menu-item
    var menuItem = document.createElement("div");
    menuItem.setAttribute("class", "menu-item");
    //name
    var itemName = document.createElement("h3");
    itemName.setAttribute("class", "item-name");
    itemName.innerHTML = name;
    //cost
    var itemCost = document.createElement("p");
    itemCost.setAttribute("class", "item-cost");
    itemCost.innerHTML = cost;
    //ing
    var itemIng = document.createElement("p");
    itemIng.setAttribute("class", "item-ing");
    itemIng.innerHTML = ing.join(" ");

    //appending all the children
    itemCost.appendChild(itemIng);
    itemName.appendChild(itemCost);
    menuItem.appendChild(itemName);
    outer.appendChild(menuItem);
    document.querySelector("#menu").appendChild(outer);
}


for(var i = 0; i < menu.length; i++){
    addItemToDOM(menu[i].name, menu[i].cost, menu[i].ing);
}