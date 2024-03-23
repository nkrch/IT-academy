document.getElementsByTagName("article")[0].style.opacity = 0;
document.getElementsByTagName("article")[0].style.transitionDelay = 100 + "ms";
document.getElementsByTagName("article")[0].style.transitionDuration =
  500 + "ms";

setTimeout(() => {
  document.getElementsByTagName("article")[0].style.left = -100 + "%";
  //document.getElementsByTagName("aside")[0].style.position = "unset";
}, 600);

window.onload = loadThemeBody();
function loadThemeBody() {
  if (localStorage.theme == "dark") {
    console.log("dark");
    document.getElementsByTagName("body")[0].style.filter = "invert(1)";
  } else {
    console.log("light");
    document.getElementsByTagName("body")[0].style.filter = "invert(0)";
  }
}

function colorFuncF(numELEM) {
  numArr[numELEM].addr.style.backgroundColor =
    colorsBack[numArr[numELEM].value];

  if (numArr[numELEM].value > 2048) {
    numArr[numELEM].addr.style.backgroundColor = colorsBack[2048];
  }
}
