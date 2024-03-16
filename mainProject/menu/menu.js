const Mwindow = document.getElementById("left");

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
<button>PREVIOUS GAME</button>
<a href="/mainProject/game.html">NEW GAME</a>
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
