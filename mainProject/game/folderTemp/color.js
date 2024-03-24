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
};

function colorFuncF(numELEM) {
  numArr[numELEM].addr.style.backgroundColor =
    colorsBack[numArr[numELEM].value];

  if (numArr[numELEM].value > 2048) {
    numArr[numELEM].addr.style.backgroundColor = colorsBack[2048];
  }
}

const h3 = [
  document.getElementById("two"),
  document.getElementById("zero"),
  document.getElementById("four"),
  document.getElementById("eight"),
];

setInterval(h3Func, 5000);
function h3Func(params) {}

function randomDiap(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}
