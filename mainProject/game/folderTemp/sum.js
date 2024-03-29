let distation = 0;
function upSum(params) {
  zeroing();
  //up();
  //проверка с первой строки, ищет, складывать ли с нижним элементом, потом мув
  for (let i = 0; i < dotsArr.length - numar; i++) {
    let wasSum = false;
    //ищем первый несвободный элемент
    if (!dotsArr[i].isFree) {
      for (
        let fSearch = i + numar;
        fSearch < dotsArr.length;
        fSearch += numar
      ) {
        if (!dotsArr[fSearch].isFree && !wasSum) {
          wasSum = true;
          distation = Math.abs(i - fSearch);
          sumCommon(fSearch, i, distation);
          //i++;
        }
      }
    }
  }
}
function downSum(params) {
  zeroing();
  //проверка с последней строки, чек, складывать ли с верхним элементом
  for (let i = dotsArr.length - 1; i >= numar; i--) {
    let wasSum = false;
    //ищем первый несвободный элемент
    if (!dotsArr[i].isFree) {
      for (let fSearch = i - numar; fSearch >= 0; fSearch -= numar) {
        if (!dotsArr[fSearch].isFree && !wasSum) {
          wasSum = true;
          distation = Math.abs(i - fSearch);
          sumCommon(fSearch, i, distation);
          //i++;
        }
      }
    }
  }
}
function leftSum(params) {
  zeroing();
  for (let row = 0; row < numar; row++) {
    const beginRow = row * numar,
      endRow = (row + 1) * numar - 1;
    for (let col = 1; col < numar; col++) {
      const check = row * numar + col;
      let isMoved = false,
        wasSum = false;
      if (!dotsArr[check].isFree) {
        for (let search = check - 1; search >= beginRow; search--) {
          if (!dotsArr[search].isFree && !isMoved) {
            distation = Math.abs(check - search);
            wasSum = true;
            sumCommon(check, search, distation);
            isMoved = true;
          }
        }
      }
    }
  }
}
function rightSum(params) {
  zeroing();
  for (let row = 0; row < numar; row++) {
    const beginRow = row * numar,
      endRow = (row + 1) * numar - 1;
    for (let col = numar - 1; col >= 0; col--) {
      const check = row * numar + col;
      let isMoved = false,
        wasSum = false;
      if (!dotsArr[check].isFree) {
        for (let search = check + 1; search <= endRow; search++) {
          if (!dotsArr[search].isFree && !isMoved && !wasSum) {
            distation = Math.abs(check - search);
            wasSum = true;
            sumCommon(check, search, distation);
            isMoved = true;
          }
        }
      }
    }
  }
}

function sumCommon(moving, moveTo, distation) {
  let movingElem = searchElem(moving);
  let moveToElem = searchElem(moveTo);

  //for summary

  if (
    numArr[movingElem].value == numArr[moveToElem].value &&
    !numArr[moveToElem].wasSum &&
    !numArr[movingElem].wasSum
  ) {
    numArr[moveToElem].wasSum = true;

    sumMove(numArr[movingElem], numArr[moveToElem], movingElem);
  }
}

function sumMove(mvng, mvt, numMvng, distation) {
  //mvng - moving
  //mvt - moveTo
  wasChanched = true;

  mvng.addr.style.zIndex = 0;
  mvng.addr.style.top = dotsArr[mvt.position].addr.offsetTop - 1.5 + "px";
  //mvng.addr.style.top = mvt.addr.offsetTop + "px";
  mvng.addr.style.left = dotsArr[mvt.position].addr.offsetLeft - 2.5 + "px";

  dotsArr[mvng.position].isFree = true;
  mvt.value *= 2;

  setTimeout(() => {
    numArr[numMvng].addr.style.opacity = 0;
    mvt.addr.innerHTML = `<h3>${mvt.value}</h3>`;

    colorFuncF(numArr.indexOf(mvt));
    setTimeout(() => {
      numArr[numMvng].addr.remove();
      delete numArr[numMvng];
    }, 50);
  }, 200);
}

function zeroing(params) {
  numArr.forEach((element) => {
    element.wasSum = false;
  });
}
