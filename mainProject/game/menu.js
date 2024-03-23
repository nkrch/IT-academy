const Mwindow = document.getElementById("left");
localStorage.setItem("previousGame", "none");
function asideF(params) {
  document.getElementsByTagName("aside")[0].style.opacity = 0;
  document.getElementsByTagName("aside")[0].style.transitionDelay = 100 + "ms";
  document.getElementsByTagName("aside")[0].style.transitionDuration =
    500 + "ms";

  setTimeout(() => {
    document.getElementsByTagName("aside")[0].style.left = 100 + "%";
    //document.getElementsByTagName("aside")[0].style.position = "unset";
  }, 600);
}

let loads = 0,
  stopInvert = false;
let chosenTheme = localStorage.getItem("theme");

if (chosenTheme == "dark") {
  if (!stopInvert) {
    dark();

    stopInvert = true;
  }
} else {
  light();
}
function themes(params) {
  Mwindow.innerHTML = `<h3><div id='t'>T</div>
  <div id='h'>H</div>
  <div id='e'>E</div>
  <div id='m'>M</div>
  <div id='e'>E</div>
  <div id='s'>S</div>
  
  </h3>
    <button id='dark'  onclick='dark()'>DARK</button>
    <button id='light'  onclick='light()'>LIGHT</button>
    <button id='cancel' onclick='cancel()'>CANCEL</button>`;
}

function cancel(params) {
  Mwindow.innerHTML = `<h3>
  <div id="two">M</div>
  <div id="zero">E</div>
  <div id="four">N</div>
  <div id="eight">U</div>
</h3>
<button onclick="previousGamesF()">PREVIOUS GAME</button>
<a href="game.html">NEW GAME</a>
<button onclick="themes()">SETTINGS</button>`;
}

function dark() {
  localStorage.setItem("theme", "dark");
  document.getElementsByTagName("html")[0].style.filter = "invert(1)";
  document.getElementsByTagName("html")[0].style.backgroundColor = "black";
}
function light() {
  localStorage.setItem("theme", "light");
  document.getElementsByTagName("html")[0].style.filter = "invert(0)";
}

window.onload = loadTheme();

function loadTheme() {
  document.getElementsByTagName("aside")[0].style.left = 0 + "%";

  setTimeout(() => {
    document.getElementsByTagName("aside")[0].style.opacity = 0;
    document.getElementsByTagName("aside")[0].style.transitionDelay =
      100 + "ms";
    document.getElementsByTagName("aside")[0].style.transitionDuration =
      500 + "ms";
    //document.getElementsByTagName("aside")[0].style.position = "unset";
  }, 600);
  asideF();
}

function previousGamesF() {
  Mwindow.innerHTML = `<h3>
  <div id="two">M</div>
  <div id="zero">E</div>
  <div id="four">N</div>
  <div id="eight">U</div>
  
</h3><div id='prevDiv'>`;
  let array = [];
  const prevDiv = document.getElementById("prevDiv");
  console.log(localStorage);
  let LCitems = false;
  for (let i = 0; i < localStorage.length; i++) {
    if (i != "theme" && localStorage[i] != undefined) {
      const now = JSON.parse(localStorage[i]);
      LCitems = true;
      console.log(now);
      if (now.author == "nkrch") {
        console.log("got");
      }
      let isAv, color;
      if (now.isAvailable) {
        isAv = "Yes";
        color = "black";
      } else {
        isAv = "No";
        color = "grey";
      }
      array[array.length] = `
    <h4 class='prevG'>Game: ${i}</h4> <p class='prevG'>Type: ${now.num}x${now.num} <p class='prevG'>Wasn't lost: ${isAv}</p><p class='prevG'>Score: ${now.score}</p> `;
      console.log(array[array.length - 1]);

      prevDiv.innerHTML += `<button class='prevChoose${isAv}' id='${isAv}${i}' style='color: ${color}'>${
        array[array.length - 1]
      }</button>`;
    }
  }
  if (!LCitems) {
    prevDiv.innerHTML = `<h4>Nothing is saved</h4>`;
  }
  Mwindow.insertAdjacentHTML(
    "beforeend",
    `</div><button id='cancel' onclick='cancel()'>CANCEL</button>`
  );
}
function prevGameGoToFunc(now) {
  const now1 = JSON.parse(now);
  if (now1.isAvailable) {
    localStorage.setItem("previousGame", now);
    console.log("gameStart");
    window.open("game.html");
  } else {
    console.log("gameIsNotAvailable");
  }
}
