function setNum(num) {
  //basic data span
  numar = num;

  for (let i = 0; i < document.getElementsByClassName("fieldDot").length; i++) {
    dotsArr[i] = {
      addr: document.getElementsByClassName("fieldDot")[i],
      isFree: true,
    };
  }

  spanTheNum();
}

function spanTheNum() {
  console.log(checkFreeDots());
  if (checkFreeDots()) {
    let newNum = numArr.length;
    let se = randomIntFromInterval(0, dotsArr.length - 1);

    const templ = dotsArr[se].addr;
    dotsArr[se].isFree = false;

    numArr[newNum] = {
      addr: document.createElement("div"),
      position: se,
      value: 2,
      wasSumed: true,
    };
    numArr[newNum].addr.className = "numberBlock";
    numArr[newNum].addr.id = "nB" + newNum;
    //random free position

    game.insertAdjacentElement("beforeend", numArr[newNum].addr);
    numArr[newNum].addr.style.borderRadius = borderRad;
    numArr[newNum].addr.innerHTML = "<h3>2</h3>";
    numArr[newNum].addr.style.width = templ.offsetWidth + 1.2 + "px";
    numArr[newNum].addr.style.height = templ.offsetHeight + 1.2 + "px";
    numArr[newNum].addr.style.position = "absolute";

    numArr[newNum].addr.style.top = templ.offsetTop - 1 + "px";
    numArr[newNum].addr.style.left = templ.offsetLeft - 1.5 + "px";

    setTimeout(() => {
      numArr[newNum].addr.style.opacity = 1;
      numArr[newNum].addr.style.transitionDuration = 350 + "ms";
    }, 400);
  } else {
    console.log("nothing is free");
  }
  checkFree();
}

function randomIntFromInterval(min, max) {
  // min and max included
  let check = Math.floor(Math.random() * (max - min + 1) + min);
  while (dotsArr[check].isFree == undefined || dotsArr[check].isFree == false) {
    check = Math.floor(Math.random() * (max - min + 1) + min);
  }
  dotsArr[check].isFree = false;
  checkFreeDots();
  return check;
}

function checkFreeDots() {
  let frees = false;
  for (let i = 0; i < dotsArr.length; i++) {
    if (dotsArr[i].isFree == true) {
      frees = true;
    }
  }

  return frees;
}
