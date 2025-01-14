class Enemy {
  constructor(name, level, hp) {
    this.name = name;
    this.hp = hp;
    this.level = level;
    this.giveExp = Math.floor(Math.random() * this.level + this.level);
    this.maxHp = this.level * 5 + 5;
    this.hp = this.maxHp;
    this.dropItemList = ["foil", "good shit", "maryjane"];
    this.droppedItem = this.dropItem();
  }

  receiveDamage(player) {
    this.hp -= player.dmg;
    console.log(
      `${this.name} receives ${player.dmg} DAMAGE from ${player.name}`
    );
    if (this.hp <= 0) {
      this.hp = 0;
      this.died();
      player.gainExp(this.giveExp);
      player.pickItem(this.dropItem());
    }
  }

  died() {
    console.log(`${this.name} has died.`);
  }

  dropItem() {
    //drop item here
    let dropTtemIdentifier = Math.round(
      Math.random() * (this.dropItemList.length - 1)
    );

    let quantity = Math.round(Math.random() * (3 - 1) + 1);

    console.log(
      `${this.name} drops x${quantity} ${this.dropItemList[dropTtemIdentifier]}.`
    );

    //test create drop item
    let itemDrop = new Item(this.dropItemList[dropTtemIdentifier], quantity);

    return itemDrop;
  }
}
