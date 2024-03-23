const modalW = document.getElementById("dialog");
const game = document.getElementById("gameField");
let borderRad;
function modal(num) {
  //animation
  modalW.style.opacity = 0;
  modalW.style.transitionDuration = "0.6s";
  grid(num);
  setTimeout(modalDisap, 600);

  function modalDisap(params) {
    modalW.style.position = "unset";
  }
  function grid(num) {
    let gridStr = "";
    let gap;
    let width = game.offsetWidth - 50;
    let field = (width * 0.9) / num;
    gap = (width * 0.1) / (num - 1);
    for (let i = 0; i < num; i++) {
      gridStr += field + "px ";
    }
    num2 = num * num;
    for (let i = 0; i < num2; i++) {
      const elem = document.createElement("div");
      elem.className = "fieldDot";
      elem.id = "e" + (i + 1);
      elem.style.width = field + "px";
      elem.style.height = field + "px";

      elem.style.borderRadius = gap * 0.5 + "px";
      borderRad = gap * 0.5 + "px";
      game.insertAdjacentElement("beforeend", elem);
    }

    game.style.gridTemplateColumns = gridStr;
    game.style.gridTemplateRows = gridStr;
    game.style.gap = gap + "px " + gap + "px";
  }
  return num;
}
window.addEventListener("resize", windChange);
function windChange(params) {
  if (numArr) {
    numArr.forEach((element) => {
      element.addr.style.transitionDuration = 0 + "ms";
      setTimeout(() => {
        element.addr.style.left =
          dotsArr[element.position].addr.offsetLeft + "px";
        element.addr.style.top =
          dotsArr[element.position].addr.offsetTop + "px";
        setTimeout(() => {
          element.addr.style.transitionDuration = 350 + "ms";
        }, 5);
      }, 5);
    });
  }
}
let gameRes = document.createElement("div");
gameRes.id = "gameRes";
let whatWindow = "none",
  wasWin = false;
function finishTheGame(whatHappened) {
  console.log(whatWindow);
  if (whatWindow == "none" || whatWindow == "win") {
    gameRes.style.position = "absolute";
    gameRes.style.opacity = 0;
    document
      .getElementsByTagName("body")[0]
      .insertAdjacentElement("afterbegin", gameRes);
    gameRes.style.backgroundColor = "#80808094";
    gameRes.style.width =
      document.getElementById("gameField").offsetWidth + "px";
    gameRes.style.height =
      document.getElementById("gameField").offsetHeight + "px";
    gameRes.style.left = document.getElementById("gameField").offsetLeft + "px";
    gameRes.style.top = document.getElementById("gameField").offsetTop + "px";
    setTimeout(() => {
      gameRes.style.transitionDuration = 450 + "ms";
      gameRes.style.opacity = 1;
    }, 10);
    window.addEventListener("resize", innerResChange);
    switch (whatHappened) {
      case "lost":
        console.log("GAME LOST");
        gameRes.innerHTML = `
        <div id='innerResult'>
        <h3>GAME LOST</h3>
        <button onclick='restartF()' id='restartBtn' class='resBtn'>Restart</button>
        </div>
        `;
        moving = true;
        whatWindow = "over";
        break;
      case "win":
        if (!wasWin) {
          console.log("GAME WIN");
          gameRes.innerHTML = `<div id='innerResult'>
          <h3>YOU WIN</h3>
          <button onclick='continueFunc()' id='continueBtn' class='resBtn'>Continue</button>
          </div>`;
          whatWindow = "win";
        }

        break;
      default:
        break;
    }
  }
}

function innerResChange() {
  gameRes.style.left = document.getElementById("gameField").offsetLeft + "px";
  gameRes.style.top = document.getElementById("gameField").offsetTop + "px";
}

function continueFunc() {}
function restartF() {
  //в том же окне
  saveData(false);
  location.href = location.href;
}
