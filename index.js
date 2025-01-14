let player = new Player("Jonas");

// let goblin = new Enemy("Goblin", 1, 1, 20);
// let orc = new Enemy("Orc", 1, 1, 20);
// let wolf = new Enemy("Wolf", 1, 1, 20);
// let imp = new Enemy("Imp", 1, 1, 20);

// let enemyList = [goblin, wolf, imp, orc];

let landOfTheGoblin = new Dungeon("Land of The Goblin", "Forest", player);

landOfTheGoblin.addEnemies();
landOfTheGoblin.exploration();
landOfTheGoblin.closeDungeon();

console.log(player);
console.log(landOfTheGoblin);

player.displayInfo();
