let player = new Player("Jonas");

let goblin = new Enemy("Goblin", 1, 1);
let orc = new Enemy("Orc", 1, 1);
let wolf = new Enemy("Wolf", 1, 1);
let imp = new Enemy("Imp", 1, 1);

let enemyList = [goblin, goblin, imp, orc];

let landOfTheGoblin = new Dungeon(
  "Land of The Goblin",
  "Forest",
  enemyList.length,
  player,
  enemyList
);

landOfTheGoblin.exploration();
landOfTheGoblin.closeDungeon();

player.displayInfo();

goblin.dropItem();
player.pickItem(goblin.dropItem());

console.log(`Player's Inventory: ${player.inventory}`);

console.log(player);
