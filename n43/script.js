const fieldSizes = {
  fieldWidth: 600,
  fieldHeight: 450,
};
const playerSizes = {
  playerWidth: fieldSizes.fieldWidth * 0.04,
  playerHeight: fieldSizes.fieldHeight * 0.2,
  ballSizes: fieldSizes.fieldWidth * 0.1,
};
let timer;
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

window.addEventListener("keydown", move);

function move() {
  let evnt, player;
  window.removeEventListener("keydown", move);

  switch (event.key) {
    case "Shift":
      evnt = "up";
      player = player1;

      break;

    case "Control":
      evnt = "down";
      player = player1;

      break;

    case "ArrowUp":
      evnt = "up";
      player = player2;
      break;
    case "ArrowDown":
      evnt = "down";
      player = player2;
      break;
    default:
      break;
  }
  moveDoing();

  function moveDoing() {
    console.log("doing");
    timer = setInterval(changing, 25);

    window.addEventListener("keyup", onUp);
    window.addEventListener("keydown", onUp);
    function changing(params) {
      switch (evnt) {
        case "up":
          if (player.offsetTop - 3 > coordinates.highest) {
            player.style.top = player.offsetTop - 5 + "px";
          }
          break;
        case "down":
          if (player.offsetTop + player.offsetHeight + 3 < coordinates.lowest) {
            player.style.top = player.offsetTop + 5 + "px";
          }

          break;
        default:
          break;
      }
    }

    function onUp() {
      clearInterval(timer);
      window.removeEventListener("keydown", onUp);
      window.removeEventListener("keyup", onUp);
      window.addEventListener("keydown", move);
    }
  }
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
let ballTimer;
function start() {
  prestart();
  clearInterval(ballTimer);
  //ball moving and physics
  let isMoving = true;

  let angle = (Math.random() * 2 - 1) * Math.PI;
  console.log(angle);
  ballTimer = setInterval(movingBall, 10);

  function movingBall() {
    if (
      ball.offsetTop - 3 < coordinates.highest ||
      Math.cos(angle) > 0.9 ||
      Math.sin(angle) > 0.95
    ) {
      angle = -angle + Math.PI;
      //ball.style.top = ball.offsetTop + 1 / Math.cos(angle) + "px";
      console.log("alarm");
      ball.style.top = ball.offsetTop + 4 * Math.cos(angle) + "px";
      ball.style.left = ball.offsetLeft + 4 * Math.sin(angle) + "px";

      //to the top
    } else if (
      ball.offsetTop + ball.offsetHeight + 3 > coordinates.lowest ||
      Math.cos(angle) > 0.9 ||
      Math.sin(angle) > 0.95
    ) {
      console.log("alarm");
      angle = Math.PI - angle;

      ball.style.top = ball.offsetTop + 3 * Math.cos(angle) + "px";
      ball.style.left = ball.offsetLeft + 3 * Math.sin(angle) + "px";
      //to the bottom
    } else {
      //basic
      ball.style.top = ball.offsetTop + 2 * Math.cos(angle) + "px";
      ball.style.left = ball.offsetLeft + 2 * Math.sin(angle) + "px";
      console.log(`angle: ${angle}
        sin: ${Math.sin(angle)}
        cos: ${Math.cos(angle)}`);
    }
    console.log(ball.offsetLeft);

    if (
      ball.offsetLeft + ball.offsetWidth >
        coordinates.rightest - player2.offsetWidth ||
      ball.offsetLeft < coordinates.leftest + player1.offsetWidth
    ) {
      if (
        ball.offsetTop >= player2.offsetTop &&
        ball.offsetTop <= player2.offsetTop + player2.offsetHeight
      ) {
        angle = -angle;
        ball.style.top = ball.offsetTop + 2 * Math.cos(angle) + "px";
        ball.style.left = ball.offsetLeft + 2 * Math.sin(angle) + "px";
      } else if (
        ball.offsetLeft + ball.offsetWidth + 3 >
        coordinates.rightest
      ) {
        count(1);
        clearInterval(ballTimer);
      }

      //player 1
      if (
        (ball.offsetTop >= player1.offsetTop &&
          ball.offsetTop <= player1.offsetTop + player1.offsetHeight) ||
        (ball.offsetTop + ball.offsetHeight >= player1.offsetTop &&
          ball.offsetTop + ball.offsetHeight <=
            player1.offsetTop + player1.offsetHeight)
      ) {
        angle = -angle;
        ball.style.top = ball.offsetTop + 2 * Math.cos(angle) + "px";
        ball.style.left = ball.offsetLeft + 2 * Math.sin(angle) + "px";
      } else if (ball.offsetLeft - 3 < field.offsetLeft) {
        count(2);
        clearInterval(ballTimer);
      }
      //
    }
  }
  count();
  //ball confronts walls
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
  // !!!!!!!clear clearInterval!!!!!!!
}
