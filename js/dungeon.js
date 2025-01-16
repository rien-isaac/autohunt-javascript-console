class Dungeon {
  constructor(name, type, player) {
    this.name = name;
    this.type = type;
    this.player = player;
    this.minEnemy = 6;
    this.maxEnemy = 10;
    this.enemies = [];
  }

  addEnemies() {
    //add enemies
    let numOfEnemy = Math.round(
      Math.random() * (this.maxEnemy - this.minEnemy) + this.minEnemy
    );

    for (let i = 0; i < numOfEnemy; i++) {
      let goblin = new Enemy(`Test-${i}`, 5, "player-name");
      this.enemies.push(goblin);
    }
  }

  exploration() {
    console.log(`${this.player.name} enters ${this.name}.`);

    this.enemies.forEach(function (enemy) {
      console.log(`${player.name} encounters ${enemy.name}.`);

      let battle = new Battle(player, enemy);
      battle.battle();
    });
  }

  closeDungeon() {
    for (let i = 0; i < this.enemies.length; i++) {
      //remove from the array if is dead
      if (this.enemies[i].hp <= 0) {
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
