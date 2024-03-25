function finalCheck() {
  const arrC = moduleArrOfPosXValue();
  console.log(arrC);
  let FINALRESULT = false;
  for (let row = 0; row < numar; row++) {
    const rowBegin = row * numar,
      rowEnd = (row + 1) * numar - 1;
    for (let i = rowBegin; i <= rowEnd; i++) {
      switch (i) {
        case rowBegin:
          if (
            arrC[i] == arrC[i + numar] ||
            arrC[i] == arrC[i - numar] ||
            arrC[i] == arrC[i + 1]
          ) {
            FINALRESULT = true;
          }
          break;
        case rowEnd:
          if (
            arrC[i] == arrC[i + numar] ||
            arrC[i] == arrC[i - numar] ||
            arrC[i] == arrC[i - 1]
          ) {
            FINALRESULT = true;
          }
          break;

        default:
          if (
            arrC[i] == arrC[i + numar] ||
            arrC[i] == arrC[i - numar] ||
            arrC[i] == arrC[i + 1] ||
            arrC[i] == arrC[i - 1]
          ) {
            FINALRESULT = true;
          }
          break;
      }
    }
  }
  console.log("FINALRESULT " + FINALRESULT);
  return FINALRESULT;
}

function finishTheGame(whatHappened) {
  console.log(whatWindow);
  if (whatWindow == "none" || whatWindow == "win") {
    //gameRes=document.getElementById('gameRes')
    console.log(gameRes)
    gameRes.style.position = "absolute";
    gameRes.style.opacity = 0;
    document
      .getElementsByTagName("body")[0]
      .insertAdjacentElement("afterbegin", gameRes);
    gameRes.style.backgroundColor = "#80808094";
    
    
      console.log(document.getElementById("gameField").clientWidth)
    setTimeout(() => {
      gameRes.style.transitionDuration = 450 + "ms";
      gameRes.style.opacity = 1;
    }, 10);
    window.addEventListener("resize", innerResChange);
    innerResChange()
    switch (whatHappened) {
      case "lost":
        console.log("GAME LOST");
        restart=true
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
  console.log(screen.width)
  


  console.log(gameField.offsetHeight)
  console.log(gameRes.offsetHeight)
}

function continueFunc() {}
function restartF() {
  restart=true;
  //в том же окне
  saveData(false);
  location.href = location.href;
}
