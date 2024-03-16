function upSum(params) {
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
          sumCommon(fSearch, i);
          //i++;
        }
      }
    }
  }
  up();
}
function downSum(params) {
  //проверка с последней строки, чек, складывать ли с верхним элементом
  for (let i = dotsArr.length - 1; i >= numar; i--) {
    let wasSum = false;
    //ищем первый несвободный элемент
    if (!dotsArr[i].isFree) {
      for (let fSearch = i - numar; fSearch >= 0; fSearch -= numar) {
        if (!dotsArr[fSearch].isFree && !wasSum) {
          wasSum = true;
          sumCommon(fSearch, i);
          //i++;
        }
      }
    }
  }
  down();
}
function leftSum(params) {}
function rightSum(params) {}

function sumCommon(moving, moveTo) {
  let movingElem = searchElem(moving);
  let moveToElem = searchElem(moveTo);
  console.log(numArr[movingElem]);

  //for summary

  if (numArr[movingElem].value == numArr[moveToElem].value) {
    sumMove(numArr[movingElem], numArr[moveToElem], movingElem);
  }
}

function sumMove(mvng, mvt, numMvng) {
  //mvng - moving
  //mvt - moveTo
  console.log(mvng.addr.offsetTop);
  mvng.addr.style.zIndex = 0;
  mvng.addr.style.top = dotsArr[mvt.position].addr.offsetTop - 1.5 + "px";
  //mvng.addr.style.top = mvt.addr.offsetTop + "px";
  mvng.addr.style.left = dotsArr[mvt.position].addr.offsetLeft - 1.5 + "px";
  dotsArr[mvng.position].isFree = true;
  mvt.value *= 2;
  console.log(mvt.value);

  setTimeout(() => {
    numArr[numMvng].addr.style.opacity = 0;
    mvt.addr.innerHTML = `<h3>${mvt.value}</h3>`;
    colorFuncF(numArr.indexOf(mvt));
    setTimeout(() => {
      numArr[numMvng].addr.remove();
      delete numArr[numMvng];
    }, 50);
  }, 250);
}
