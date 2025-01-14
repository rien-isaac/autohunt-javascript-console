class Player {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.exp = 0;
    this.maxExp = this.level * 5;
    this.baseDmg = 3;
    this.dmg;
    this.maxHp = this.level * 5 + 5;
    this.hp = this.maxHp;
    this.inventory = [];
  }

  displayInfo() {
    console.log(
      `
%c🐺${this.name}`,
      `color: #0000ff; font-size: .9rem;`,
      `
LVL ${this.level}
🧡 ${this.hp}/${this.maxHp}
EXP ${this.exp}/${this.maxExp}
💪 ${this.baseDmg}
🎒 ${this.inventory.length}/9

`
    );
  }

  attack(enemy) {
    this.dmg = this.baseDmg + this.level;
    console.log(`${this.name} attacks and deal ${this.dmg} DAMAGE.`);
    enemy.receiveDamage(player);
  }

  gainExp(enemyExp) {
    this.exp += enemyExp;
    if (this.exp >= this.maxExp) {
      this.levelUp();
    }
  }

  levelUp() {
    let previousLevel = this.level;
    if (this.exp >= this.maxExp) {
      let excessLevel = Math.floor(this.exp / this.maxExp);
      let excessExp = this.exp % this.maxExp;
      this.level += excessLevel;
      console.log(
        `${this.name} LEVELED UP. LVL ${previousLevel} -> ${this.level}`
      );
      this.exp = 0;
      this.exp += excessExp;
      this.maxExp = this.level * 5;
    }
  }

  pickItem(enemyDrop) {
    //pick enemy's drop item

    let isPresent = this.inventory.some(function (item) {
      return item.name == enemyDrop.name;
    });

    console.log(isPresent);

    if (isPresent) {
      this.inventory.forEach(function (item) {
        //
        if (item.name == enemyDrop.name) {
          item.quantity += enemyDrop.quantity;
        }
      });
    } else {
      this.inventory.push(enemyDrop);
    }
  }
}
