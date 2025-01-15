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
arrayOfMessage.push("Hoy!");
arrayOfMessage.push("Yung Tropa mo");
arrayOfMessage.push("bato ng bato");
arrayOfMessage.push("sa bubong ng bahay namen.");
arrayOfMessage.push("");

let changingTxt = document.getElementById("changingText");

let TaskDelayBtn = document.getElementById("taskDelayBtn");
TaskDelayBtn.addEventListener("click", function () {
  console.log(`test`);
  test;
});

const test = setInterval(testFunction, 1500);

let counter = 0;

function testFunction() {
  changingTxt.textContent = arrayOfMessage[counter];
  counter++;

  if (counter > arrayOfMessage.length - 1) {
    clearInterval(test);
  }
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
    hpBar.value = player.hp;
    hpBar.max = player.maxHp;
    playerLevel.textContent = `Lvl: ${player.level}`;
    playerHp.textContent = `🧡: ${player.hp}/${player.maxHp}`;
    playerExp.textContent = `Exp: ${player.exp}/${player.maxExp}`;
    expBar.value = player.exp;
    expBar.max = player.maxExp;
  }, 1500);
};
