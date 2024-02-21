//константы
var size;
const timeString = document.getElementsByTagName("p")[0];
let rad = size / 2;
const deg360 = Math.PI * 2;
const clock = document.getElementById("clock");
const secElem = document.createElement("div");
const hourElem = document.createElement("div");
const minElem = document.createElement("div");
//валидация введённого

function valid() {
  size = document.getElementsByTagName("input")[0].value;
  if (size > 800 || size < 200) {
    alert("Wrong");
  } else {
    if (document.getElementsByClassName("clockNum").length > 0) {
      clock.replaceChildren("");
      secElem.replaceChildren("");
      minElem.replaceChildren("");
      hourElem.replaceChildren("");
    }
    clock.style.width = size + "px";
    clock.style.height = size + "px";
    console.log(size, clock.offsetHeight);
    clockBuild(size);
  }
}
//построение циферблата
function clockBuild(size) {
  rad = size / 2;
  const numbersDist = rad * 0.85;
  const numberRad = rad / 12;

  let center = {
    x: clock.offsetLeft + rad,
    y: clock.offsetTop + rad,
  };
  console.log(center);

  for (let i = 1; i <= 12; i++) {
    const clockNum = document.createElement("div");
    clockNum.className = "clockNum";
    clockNum.innerText = i;
    clockNum.style.width = numberRad + "px";
    clockNum.style.height = numberRad + "px";
    clockNum.style.fontSize = size / 13 + "px";
    timeString.style.fontSize = size / 13 + "px";
    clockNum.style.backgroundColor = "lightblue";
    clockNum.style.borderRadius = 100 + "%";
    clockNum.style.padding = 100 + "%";
    clockNum.style.alignItems = "center";
    clockNum.style.justifyContent = "center";
    clockNum.style.display = "flex";
    clockNum.style.position = "absolute";
    clockNum.style.textAlign = "center";
    clockNum.style.padding = size / 60 + "px";
    clockNum.style.left =
      center.x +
      numbersDist * Math.sin((deg360 * i) / 12) -
      numberRad / 1.7 +
      "px";
    clockNum.style.top =
      center.y -
      numbersDist * Math.cos((deg360 * i) / 12) -
      numberRad / 2.4 +
      "px";
    clock.insertAdjacentElement("beforeend", clockNum);
  }
  const bufferChild = document.createElement("div"),
    bufferChild1 = document.createElement("div"),
    bufferChild2 = document.createElement("div");
  clock.appendChild(secElem);

  clock.appendChild(minElem);
  clock.appendChild(hourElem);

  secElem.style.position = "absolute";
  minElem.style.position = "absolute";
  hourElem.style.position = "absolute";
  bufferChild.style.borderRadius = 100 + "vh";
  bufferChild1.style.borderRadius = 100 + "vh";
  bufferChild2.style.borderRadius = 100 + "vh";
  secElem.style.left = center.x + "px";
  minElem.style.left = center.x + "px";
  hourElem.style.left = center.x + "px";
  secElem.style.top = center.y - rad * 0.7 + "px";
  minElem.style.top = center.y - rad * 0.5 + "px";
  hourElem.style.top = center.y - rad * 0.3 + "px";

  bufferChild.style.backgroundColor = "black";
  bufferChild.style.width = 100 + "%";
  bufferChild.style.height = 50 + "%";
  bufferChild1.style.backgroundColor = "black";
  bufferChild1.style.width = 100 + "%";
  bufferChild1.style.height = 50 + "%";
  bufferChild2.style.backgroundColor = "black";
  bufferChild2.style.width = 100 + "%";
  bufferChild2.style.height = 50 + "%";

  hourElem.insertAdjacentElement("afterbegin", bufferChild);
  minElem.insertAdjacentElement("afterbegin", bufferChild1);
  secElem.insertAdjacentElement("afterbegin", bufferChild2);
  secElem.style.width = rad * 0.01 + "px";
  minElem.style.width = rad * 0.02 + "px";
  hourElem.style.width = rad * 0.03 + "px";
  secElem.style.height = 2 * rad * 0.7 + "px";
  minElem.style.height = 2 * rad * 0.5 + "px";
  hourElem.style.height = 2 * rad * 0.3 + "px";
  const time = clockGo();
  timeString.style.padding = 0;
  timeString.style.margin = 0;
  timeString.style.position = "absolute";
  timeString.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  timeString.style.left = center.x - timeString.offsetWidth / 2 + "px";
  timeString.style.top = center.y - rad / 2 + "px";

  setInterval(clockGo, 1000);
}

function clockGo() {
  const time = new Date();

  timeString.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  const secAngle = (360 / 60) * time.getSeconds();
  const minAngle = (360 / 60) * time.getMinutes();
  const hourAngle =
    (deg360 / 12) * time.getHours() + (deg360 / 12 / 60) * time.getMinutes();
  secElem.style.transform = `rotate(${secAngle}deg)`;
  minElem.style.transform = `rotate(${minAngle}deg)`;
  hourElem.style.transform = `rotate(${hourAngle}deg)`;
  return time;
}
