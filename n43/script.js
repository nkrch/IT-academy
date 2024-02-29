const fieldSizes = {
  fieldWidth: 600,
  fieldHeight: 450,
};
const playerSizes = {
  playerWidth: fieldSizes.fieldWidth * 0.04,
  playerHeight: fieldSizes.fieldHeight * 0.2,
  ballSizes: fieldSizes.fieldWidth * 0.1,
};
let thePlay = false;
let count1 = 0,
  count2 = 0;
const field = document.getElementById("field");
const ball = document.createElement("div");
field.style.width = fieldSizes.fieldWidth + "px";
field.style.height = fieldSizes.fieldHeight + "px";
const countP = document.getElementById("count");
const coordinates = {
  highest: field.offsetTop,
  lowest: field.offsetTop + field.offsetHeight,
  center: {
    x: fieldSizes.fieldWidth / 2 + field.offsetLeft,
    y: fieldSizes.fieldHeight / 2 + field.offsetTop,
  },
  leftest: field.offsetLeft,
  rightest: field.offsetLeft + field.offsetWidth,
  player1Confront: field.offsetLeft + playerSizes.playerWidth,
  player2Confront:
    field.offsetLeft + field.offsetWidth - playerSizes.playerWidth,
};

const player1 = document.createElement("div"),
  player2 = document.createElement("div");
player1.id = "player1";
player2.id = "player2";
player1.style.backgroundColor = "green";
player2.style.backgroundColor = "blue";

creation(player1);
creation(player2);
player1.style.left = field.offsetLeft + "px";
player2.style.left =
  field.offsetLeft + field.offsetWidth - player2.offsetWidth + "px";

function creation(elem) {
  elem.style.width = playerSizes.playerWidth + "px";
  elem.style.height = playerSizes.playerHeight + "px";
  elem.style.position = "absolute";
  field.insertAdjacentElement("afterbegin", elem);
}

window.onload = prestart();

player1.insertAdjacentElement("afterend", ball);
function prestart() {
  //ball
  ball.id = "ball";
  ball.style.backgroundColor = "red";
  ball.style.width = playerSizes.ballSizes + "px";
  ball.style.height = playerSizes.ballSizes + "px";
  ball.style.borderRadius = 100 + "%";
  ball.style.position = "absolute";

  ball.style.top = coordinates.center.y - playerSizes.ballSizes / 2 + "px";
  ball.style.left = coordinates.center.x - playerSizes.ballSizes / 2 + "px";
}
let speedR = {
    1: 0,
    2: 0,
  },
  speedB = {
    x: 0,
    y: 0,
  };

setInterval(movingAll, 25);
function movingAll() {
  ball.style.top = ball.offsetTop + speedB.y + "px";
  ball.style.left = ball.offsetLeft + speedB.x + "px";
  player1.style.top = player1.offsetTop + speedR[1] + "px";
  player2.style.top = player2.offsetTop + speedR[2] + "px";

  //ball moving and physics
  if (
    ball.offsetTop + ball.offsetHeight + 4 >=
      field.offsetHeight + field.offsetTop ||
    ball.offsetTop - 4 <= field.offsetTop
  ) {
    speedB.y = speedB.y * -1;
    console.log(speedB.y);
  }

  count();

  //ball confronts players
  if (
    (ball.offsetLeft + ball.offsetWidth + 1 >= player2.offsetLeft &&
      ball.offsetHeight + ball.offsetTop >= player2.offsetTop &&
      ball.offsetTop <= player2.offsetTop + player2.offsetHeight) ||
    (ball.offsetLeft - 1 <= player1.offsetLeft + player1.offsetWidth &&
      ball.offsetHeight + ball.offsetTop >= player1.offsetTop &&
      ball.offsetTop <= player1.offsetTop + player1.offsetHeight)
  ) {
    speedB.x = -speedB.x;
  }

  //player 1 confronts walls
  if (
    (player1.offsetTop - 1 <= field.offsetTop && speedR[1] < 0) ||
    (player1.offsetTop + player1.offsetHeight + 1 >=
      field.offsetHeight + field.offsetTop &&
      speedR[1] > 0)
  ) {
    speedR[1] = 0;
  }

  //player 2 confronts walls
  if (
    (player2.offsetTop - 1 <= field.offsetTop && speedR[2] < 0) ||
    (player2.offsetTop + player2.offsetHeight + 1 >=
      field.offsetHeight + field.offsetTop &&
      speedR[2] >= 0)
  ) {
    speedR[2] = 0;
  }

  //ball confronts walls

  if (ball.offsetLeft - 1 <= field.offsetLeft && thePlay == true) {
    thePlay = false;
    speedB.x = 0;
    speedB.y = 0;
    count(2);
  }
  if (
    ball.offsetLeft + ball.offsetWidth + 1 >=
      field.offsetLeft + field.offsetWidth &&
    thePlay == true
  ) {
    thePlay = false;
    speedB.x = 0;
    speedB.y = 0;
    count(1);
  }

  function count(num) {
    countP.style.left = coordinates.center.x + "px";
    countP.style.top = coordinates.highest - countP.offsetHeight + "px";
    switch (num) {
      case 1:
        count1++;
        break;
      case 2:
        count2++;
        break;
      default:
        break;
    }
    countP.innerText = count1 + ":" + count2;
  }
}

function start() {
  thePlay = true;
  prestart();
  let bool = Math.floor(Math.random() * 2) === 0;
  if (bool) {
    speedB.x = 4;
  } else {
    speedB.x = -4;
  }
  bool = Math.floor(Math.random() * 2) === 0;
  if (bool) {
    speedB.y = 4;
  } else {
    speedB.y = -4;
  }

  // !!!!!!!clear clearInterval!!!!!!!
}

//нажатие на кнопку

function btnDown() {
  console.log(event);
  let thiscase = event.key;
  console.log(event.key);
  //speedR = 2;
  window.addEventListener("keyup", btnUp);
  switch (event.key) {
    case "Control":
      speedR[1] = 4;
      break;
    case "Shift":
      speedR[1] = -4;
      break;
    case "ArrowUp":
      speedR[2] = -4;
      break;
    case "ArrowDown":
      speedR[2] = 4;
      break;
    default:
      break;
  }
  function btnUp() {
    switch (event.key) {
      case "Control":
        speedR[1] = 0;
        break;
      case "Shift":
        speedR[1] = 0;
        break;
      case "ArrowUp":
        speedR[2] = 0;
        break;
      case "ArrowDown":
        speedR[2] = 0;
        break;
      default:
        break;
    }
  }

  //player 1 confronts walls
  if (
    (player1.offsetTop - 1 <= field.offsetTop && speedR[1] < 0) ||
    (player1.offsetTop + player1.offsetHeight + 1 >=
      field.offsetHeight + field.offsetTop &&
      speedR[1] > 0)
  ) {
    speedR[1] = 0;
  }

  //player 2 confronts walls
  if (
    (player2.offsetTop - 4 <= field.offsetTop && speedR[2] < 0) ||
    (player2.offsetTop + player2.offsetHeight + 2 >=
      field.offsetHeight + field.offsetTop &&
      speedR[2] >= 0)
  ) {
    speedR[2] = 0;
  }
}

//test
window.addEventListener("keydown", btnDown);
