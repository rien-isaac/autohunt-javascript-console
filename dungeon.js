class Dungeon {
  constructor(name, type, numOfEnemies, player, enemies) {
    this.name = name;
    this.type = type;
    this.numOfEnemies = numOfEnemies;
    this.player = player;
    this.enemies = enemies;
  }

  addEnemies(enemy) {
    //add enemies
    this.enemies.push(enemy);
  }

  exploration() {
    this.enemies.forEach(function (enemy) {
      console.log(`${player.name} encounters ${enemy.name}.`);

      let battle = new Battle(player, enemy);
      battle.battle();
    });
  }

  closeDungeon() {
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.enemies[i].hp <= 0) {
        console.log(`${this.enemies[i].name} is dead.`);

        this.enemies.splice(i); //remove from the array
      }
    }

    if (this.enemies.length == 0) {
      console.log(`There's no enemies left, ${this.name} will close.`);
    } else {
      console.log(
        `There's still ${this.enemies.length} enemy left, the dungeon gate will remain open.`
      );
    }
  }
}
