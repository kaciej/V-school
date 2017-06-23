//https://coursework.vschool.io/enemy-generator/

var ranNumInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var genEnemy = function () {
    var enemyTypes = ["Twilight Sparkle", "Rainbow Dash", "Pinkie Pie"];
    var randomType = enemyTypes[ranNumInRange(0, enemyTypes.length)];
    var randomHitPoints = 0;
    if (randomType === "Twilight SParkle") {
        randomHitPoints = ranNumInRange(80, 100);
    } else if (randomType === "Raindow Dash") {
        randomHitPoints = ranNumInRange(50, 79);
    } else {
        randomHitPoints = ranNumInRange(20, 49);
    }
    var randomEnemy = new Enemy(randomType, randomHitPoints, randomHitPoints * 3);
    return randomEnemy;
};

var Enemy = function (type, hitPoints, defense) {
    this.type = type;
    this.hitPoitns = hitPoints;
    this.defense = defense;
    this.print = function () {
        console.log("The ememy " + this.type + " has hit poitns of " + this.hitPoitns + " and defense of " + this.defense);
    }
};

var hundredEnemies = function () {
    var enemies = [];
    for (var i = 1; i < 100; i++) {
        enemies.push(new Enemy());
    }
    console.log(enemies);
};

hundredEnemies();