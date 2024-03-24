function up() {
  //костыль
  for (let n = 0; n < numar; n++) {
    for (let i = dotsArr.length - 1; i >= numar; i--) {
      if (!dotsArr[i].isFree && dotsArr[i - numar].isFree) {
        moveElem(i, i - numar);
      }
    }
  }
}

function down(params) {
  for (let b = 0; b < numar; b++) {
    //костыль
    for (let i = 0; i < dotsArr.length - numar; i++) {
      if (!dotsArr[i].isFree && dotsArr[i + numar].isFree) {
        moveElem(i, i + numar);
        /*let a = searchElem(i);

        if (numArr[a].position == i) {
          wasChanched = true;

          numArr[a].addr.style.top = dotsArr[i + numar].addr.offsetTop + "px";
          dotsArr[i + numar].isFree = false;
          dotsArr[i].isFree = true;
          numArr[a].position = i + numar;
        }*/
      }
    }
  }
}

function left(params) {
  for (let e = 0; e < numar; e++) {
    for (let row = 0; row < numar; row++) {
      const beginRow = row * numar,
        endRow = (row + 1) * numar - 1;

      for (let col = 1; col < numar; col++) {
        const checking = beginRow + col;
        for (let i = checking - 1; i >= beginRow; i--) {
          if (dotsArr[i].isFree && !dotsArr[checking].isFree) {
            moveElem(checking, i);
          }
        }
      }
    }
  }
}

function right() {
  for (let e = 0; e < numar; e++) {
    for (let row = 0; row < numar; row++) {
      const beginRow = row * numar,
        endRow = (row + 1) * numar - 1;

      for (let col = numar - 2; col >= 0; col--) {
        checking = beginRow + col;

        for (let mtSearch = checking + 1; mtSearch <= endRow; mtSearch++) {
          if (dotsArr[mtSearch].isFree && !dotsArr[checking].isFree) {
            moveElem(checking, mtSearch);
          }
        }
      }
    }
  }
}

function moveElem(moving, moveTo) {
  let a = searchElem(moving);

  if (a != null) {
    console.log(numArr[a].addr.offsetLeft);
    let distanceX = dotsArr[moveTo].addr.offsetLeft - numArr[a].addr.offsetLeft;
    let distanceY = dotsArr[moveTo].addr.offsetTop - numArr[a].addr.offsetTop;

    wasChanched = true;
    numArr[a].addr.style.transitionDuration = 350 + "ms";
    numArr[a].addr.style.left = dotsArr[moveTo].addr.offsetLeft - 1.5 + "px";
    numArr[a].addr.style.top = dotsArr[moveTo].addr.offsetTop - 1.5 + "px";
    dotsArr[moveTo].isFree = false;
    dotsArr[moving].isFree = true;
    numArr[a].position = moveTo;
  }
  console.log(checkFreeDots());
}

function checkFree() {
  let ISOVER = true;
  for (let i = 0; i < dotsArr.length; i++) {
    if (dotsArr[i].isFree) {
      ISOVER = false;
      isOver();
    }
  }
  return ISOVER;
}

function isOver() {}
