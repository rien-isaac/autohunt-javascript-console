// clicking buttons
LandOfGoblinBtn = document.getElementById("LandOfGoblinBtn");

LandOfGoblinBtn.addEventListener("click", function () {
  let landOfTheGoblin = new Dungeon("Land of The Goblin", "Forest", player);

  landOfTheGoblin.addEnemies();
  landOfTheGoblin.exploration();
  landOfTheGoblin.closeDungeon();
});

ConferenceRoomBtn = document.getElementById("ConferenceRoomBtn");

ConferenceRoomBtn.addEventListener("click", function () {
  let conferenceRoom = new Dungeon("Conference Room", "Urban", player);

  conferenceRoom.addEnemies();
  conferenceRoom.exploration();
  conferenceRoom.closeDungeon();
});

PlayerShowInfoBtn = document.getElementById("showInfoBtn");

PlayerShowInfoBtn.addEventListener("click", function () {
  player.displayInfo();
});

let arrayOfMessage = [];

arrayOfMessage.push("Go POKEMON!");
arrayOfMessage.push("POKEMON uses ATTACK and deal 30 damage.");
arrayOfMessage.push("POKEMON LEVEL UP!");
arrayOfMessage.push(`${player.name} decided to flee.`);

let changingTxt = document.getElementById("changingText");

let counter = 0;
let interval = 1500;

let TaskDelayBtn = document.getElementById("taskDelayBtn");
TaskDelayBtn.addEventListener("click", function () {
  setInterval(changeTextContent, interval);
  counter = 0;
});

function changeTextContent() {
  changingTxt.textContent = arrayOfMessage[counter];
  counter++;
}

let playerName = document.getElementById("player-name");
let playerLevel = document.getElementById("player-level");

let playerHp = document.getElementById("player-hp");
let playerExp = document.getElementById("player-exp");

let hpBar = document.getElementById("hp-bar");
let expBar = document.getElementById("exp-bar");

window.onload = function (e) {
  setInterval(function () {
    playerName.textContent = `Name: ${player.name}`;
    playerLevel.textContent = `Lvl: ${player.level}`;
    playerHp.textContent = `Hp: ${player.hp}/${player.maxHp}`;
    playerExp.textContent = `Exp: ${player.exp}/${player.maxExp}`;
  }, 24);
};

document.addEventListener("keydown", (event) => {
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  switch (event.key) {
    case "ArrowLeft":
      // Left pressed
      player.exp -= 1;
      player.levelUp();
      break;
    case "ArrowRight":
      // Right pressed
      player.exp += 1;
      player.levelUp();
      break;
    case "ArrowUp":
      // Up pressed
      break;
    case "ArrowDown":
      // Down pressed
      break;
  }
});

function displayPlayerInfo() {
  player.displayInfo();
}

let displayPlayerInventoryBtn = document.getElementById(
  "displayPlayerInventoryBtn"
);

displayPlayerInventoryBtn.addEventListener("click", function () {
  inventory();
});

function inventory() {
  player.inventory.forEach(function (item) {
    let item_box = document.createElement("div");
    let item_name = document.createElement("p");

    item_name.textContent = `${item.name} (${item.quantity})`;
    item_name.classList.add("item-name");
    item_box.appendChild(item_name);
    item_box.classList.add("item");
    document.getElementById("inventory-container").appendChild(item_box);
  });
}
