console.log(localStorage);

document.getElementsByTagName("article")[0].style.opacity = 0;
document.getElementsByTagName("article")[0].style.transitionDelay = 100 + "ms";
document.getElementsByTagName("article")[0].style.transitionDuration =
  500 + "ms";

setTimeout(() => {
  document.getElementsByTagName("article")[0].style.left = -100 + "%";
  //document.getElementsByTagName("aside")[0].style.position = "unset";
}, 600);

/*window.onload = onload();

function onload() {
  setTimeout(() => {
    window.addEventListener("close", closeFunc);
  }, 100);
}

function closeFunc(ev) {
  ev.preventDefault();
  alert("Closing");
}*/

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

function saveData(isAvailable) {
  let newScore = Number(score.innerText);
  var JSONme = JSON.stringify(numArr);
  var newGame = new PreviousGames(isAvailable, numArr, numar, newScore);
  localStorage[localStorage.length] = JSON.stringify(newGame);
  console.log(localStorage[localStorage.length - 1]);
}

class PreviousGames {
  constructor(isAvailable, arr, num, score) {
    this.author = "nkrch";
    this.isAvailable = isAvailable;
    this.arr = arr;
    this.num = num;
    this.score = score;
  }
}

let url = location.href;

//var tab = window.open(url);
