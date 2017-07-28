let readlineSync = require("readline-sync");

let xAxis = readlineSync.question("How long would you like the grids X axis to be?: ")
xAxis = Number(xAxis);
let yAxis = readlineSync.question("How long would you like the grids Y axis to be?: ")
yAxis = Number(yAxis);

//generate a grid that is 5 x 5 squares

let genGrid = () => {
    let grid = [];
    for(let i = 0; i < xAxis; i++){
        grid.push([]);
        for(let j = 0; j < yAxis; j++){
            grid[i].push("*");
        }
    }
    return grid;
}

let grid = genGrid();
console.log("Here's your grid:");
console.log(grid);




//alter th original grid to display the choosen character in the choosen coordinates
//promts user to enter info (x , y, and character input)

while(true){
    let x = readlineSync.question(`Input the X coordinate and number youd like to change between ${xAxis} - 0 : `)
    x = Number(x);
    let y = readlineSync.question(`Input the Y coordinate and number youd like to change between ${yAxis} - 0 : `)
    y = Number(y);
    let char = readlineSync.question("what character would you like to input in that spot?: ")
    grid[y][x] = char;
    console.log(grid);
    let keepPlaying = readlineSync.keyInYN("Do you want to keep playing?");
    if(!keepPlaying) break;
};


