var fs = require("fs");
var contents = fs.readFileSync("menu.json", "utf8");
var menu = JSON.parse(contents);
console.log(menu.breakfast[2]);
