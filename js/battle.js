class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  battle() {
    //
    console.log(`${this.player.name} VS ${this.enemy.name}`);

    if (this.player.hp > 0) {
      while (this.enemy.hp > 0) {
        player.attack(this.enemy);
      }
    }
  }
}
