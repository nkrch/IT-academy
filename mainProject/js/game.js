let numar,
  dotsArr = [], //массив точек поля
  /*dotsArr[]={
  addr
  isFree
}
numArr[]={
  position
  value
  addr
}
wasChanged
moving */

  numArr = [], //массив позиций элементов-цифр
  wasChanched,
  moving = false; //проверка было ли поле изменено

window.addEventListener("keydown", onKeyPRE);

function onKeyPRE(event) {
  if (!moving) {
    onKey(event);
  }
}

function onKey(ev) {
  console.log(ev.key);
  wasChanched = false;
  /*
  ArrowUp w
ArrowLeft a
ArrowDown s
ArrowRight d */
  if (!moving) {
    moving = true;
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
    summary(ev);
  }
  setTimeout(() => {
    moving = false;
  }, 420);
}

function summary(ev) {
  switch (ev.key) {
    case "ArrowUp":
      upSum();

      break;
    case "w":
      upSum();

      break;
    case "W":
      upSum();

      break;
    case "ArrowDown":
      downSum();

      break;
    case "s":
      downSum();

      break;
    case "S":
      downSum();

      break;
    case "ArrowLeft":
      leftSum();

      break;
    case "a":
      leftSum();

      break;
    case "A":
      leftSum();

      break;
    case "ArrowRight":
      rightSum();

      break;
    case "d":
      rightSum();

      break;
    case "D":
      rightSum();

      break;
    case "default":
      break;
  }

  if (wasChanched) {
    spanTheNum();
    scoreFunc(250);
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
