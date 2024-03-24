if (!game) {
  const game = document.getElementById("gameField");
}

if (localStorage.getItem("previousGame") != "none")
  modal(JSON.parse(localStorage["previousGame"]).num);
function modal(num) {
  numar = num;
  //animation
  if (localStorage.getItem("previousGame") != "none") {
    modalDisap();
    setNum(numar);
    grid(JSON.parse(localStorage["previousGame"]).num);

    console.log("understood");
    numArr = JSON.parse(localStorage["previousGame"]).arr;
    console.log(numArr);

    for (let i = 0; i < numArr.length; i++) {
      numArr[i].addr = document.createElement("div");

      numArr[i].addr.style.position = "absolute";
      numArr[i].addr.className = "numberBlock";
      document
        .getElementById("gameField")
        .insertAdjacentElement("beforeend", numArr[i].addr);
      numArr[i].addr.innerHTML = `<h3>${numArr[i].value}</h3>`;
      numArr[i].addr.style.width =
        dotsArr[numArr[i].position].offsetWidth + "px";
      numArr[i].addr.style.top = dotsArr[numArr[i].position].offsetTop + "px";
      numArr[i].addr.style.height =
        dotsArr[numArr[i].position].offsetHeight + "px";
      numArr[i].addr.style.left = dotsArr[numArr[i].position].offsetLeft + "px";
    }
    if (numArr.length < 1) {
      spanTheNum();
    }
  } else {
    console.log("newGame");
    modalW.style.opacity = 0;
    modalW.style.transitionDuration = "0.6s";
    grid(num);
    setTimeout(modalDisap, 600);

    return num;
  }

  function modalDisap(params) {
    modalW.style.position = "unset";
  }
  function grid(num) {
    window.onbeforeunload = function (event) {
      event.preventDefault();
      saveData(true);
      alert("Данные не сохранены. Точно перейти?");
    };

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
      game.insertAdjacentElement("beforeend", elem);
    }

    game.style.gridTemplateColumns = gridStr;
    game.style.gridTemplateRows = gridStr;
    game.style.gap = gap + "px " + gap + "px";
  }
}
