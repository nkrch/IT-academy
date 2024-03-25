let numar,
  dotsArr = [], //массив точек поля
  numArr = [], //массив позиций элементов-цифр
  wasChanched,
  moving = false,
  borderRad,
  gameRes = document.createElement("div"),
  distation = 0,
  whatWindow = "none",
  wasWin = false,
  restart=false; //проверка было ли поле изменено

const colorsBack = {
    4: "rgba(211, 234, 140, 0.987)",
    8: "rgb(237, 220, 160)",
    16: "rgb(171, 237, 160)",
    32: "rgb(158, 237, 165)",
    64: "rgb(253, 164, 176)",
    128: "rgba(176, 237, 123, 0.9);",
    256: "rgb(129, 232, 138)",
    512: "rgb(211, 170, 234)",
    1024: "rgb(171, 216, 163)",
    2048: "rgb(140, 237, 55)",
  },
  h3 = [
    document.getElementById("two"),
    document.getElementById("zero"),
    document.getElementById("four"),
    document.getElementById("eight"),
  ],
  modalW = document.getElementById("dialog"),
  game = document.getElementById("gameField");
gameRes.id = "gameRes";

if (!modalW) {
  const modalW = document.getElementById("dialog");
}

let url = location.href;

//var tab = window.open(url);
if (!game) {
  const game = document.getElementById("gameField");
}
