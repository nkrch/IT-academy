if (!modalW) {
  const modalW = document.getElementById("dialog");
}

window.addEventListener("keydown", onKeyPRE);

function onKeyPRE(event) {
  if (!moving) {
    onKey(event);
  }
}

function onKey(ev) {
  console.log(ev.key);
  wasChanched = false;
  numArr.forEach((element) => {
    element.addr.style.transitionDuration = 300 + "ms";
  });
  /*
  ArrowUp w
ArrowLeft a
ArrowDown s
ArrowRight d */
  if (!moving) {
    moving = true;
    swtchCase(ev);
    summary(ev);
  }
  setTimeout(() => {
    moving = false;
  }, 420);
}

function summary(ev) {
  ev.preventDefault();
  switch (ev.key) {
    case "ArrowUp":
      upSum();
      //up();
      break;
    case "w":
      upSum();
      //up();
      break;
    case "W":
      upSum();
      //up();
      break;
    case "ArrowDown":
      downSum();
      //down();
      break;
    case "s":
      downSum();
      //down();
      break;
    case "S":
      downSum();
      //down();
      break;
    case "ArrowLeft":
      leftSum();
      //left();
      break;
    case "a":
      leftSum();
      //left();
      break;
    case "A":
      leftSum();
      //left();
      break;
    case "ArrowRight":
      rightSum();
      //right();
      break;
    case "d":
      rightSum();
      //right();
      break;
    case "D":
      rightSum();
      //right();
      break;
    case "default":
      break;
  }
  //

  if (wasChanched) {
    spanTheNum();
    setTimeout(swtchCase(ev), 1000);
    scoreFunc(250);
  }
  console.log("is over: " + checkFree());
  if (checkFree() && !finalCheck()) {
    finishTheGame("lost");
  }
}

function swtchCase(ev) {
  numArr.forEach((elem) => {
    elem.addr.transitionDuration = 400 + "ms";
  });
  switch (ev.key) {
    case "ArrowUp":
      up();

      break;
    case "w":
      up();

      break;
    case "W":
      up();

      break;
    case "ArrowDown":
      down();

      break;
    case "s":
      down();

      break;
    case "S":
      down();

      break;
    case "ArrowLeft":
      left();

      break;
    case "a":
      left();

      break;
    case "A":
      left();

      break;
    case "ArrowRight":
      right();

      break;
    case "d":
      right();

      break;
    case "D":
      right();

      break;
    default:
      break;
  }
}

function searchElem(i) {
  let forSend = null;
  numArr.forEach((element) => {
    if (element.position == i) {
      forSend = numArr.indexOf(element);
    }
  });

  return forSend;
}

function scoreFunc(meaning) {
  const score = document.getElementById("score");
  let newScore = Number(score.innerText) + meaning;
  let add = "";
  for (let i = 0; i < 8 - String(newScore).length; i++) {
    add += "0";
  }

  score.innerText = add + newScore;
}

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

function moduleArrOfPosXValue() {
  let arr = [];
  for (let i = 0; i < dotsArr.length; i++) {
    const elem = searchElem(i);
    arr[i] = numArr[elem].value;
  }
  return arr;
}
