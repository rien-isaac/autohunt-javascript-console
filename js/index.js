let player = new Player("Jonas");

let slime = new Enemy("Slime", 1);
let wolf = new Enemy("Wolf", 2);
let goblin = new Enemy("Goblin", 3);
let lycan = new Enemy("Lycan", 4);

let HuntBox = document.getElementById("hunt-box");
let HuntBtn = document.getElementById("hunt-btn");

window.onload = function () {
  ListEnemies();
};

HuntBtn.addEventListener("click", function () {
  if (HuntBox.style.display === "none") {
    HuntBox.style.display = "flex";
  } else {
    HuntBox.style.display = "flex";
  }
});

let CloseHuntBoxBtn = document.getElementById("close-hunt-box-btn");

CloseHuntBoxBtn.addEventListener("click", function () {
  if (HuntBox.style.display === "flex") {
    HuntBox.style.display = "none";
  }
});

let EnemyList = [slime, wolf, goblin, lycan];

function ListEnemies() {
  EnemyList.forEach(function (enemy) {
    let clickableEnemy = document.createElement("p");
    let EnemyLevel = document.createElement("span");
    let EnemName = document.createElement("span");

    EnemyLevel.textContent = `Lvl ${enemy.level}`;
    EnemName.textContent = `${enemy.name}`;

    clickableEnemy.appendChild(EnemyLevel);
    clickableEnemy.appendChild(EnemName);

    clickableEnemy.classList.add("enemy-clickable");

    document.getElementById("enemy-box").appendChild(clickableEnemy);
  });
}
