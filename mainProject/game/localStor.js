console.log(localStorage);

document.getElementsByTagName("article")[0].style.opacity = 0;
document.getElementsByTagName("article")[0].style.transitionDelay = 100 + "ms";
document.getElementsByTagName("article")[0].style.transitionDuration =
  500 + "ms";

setTimeout(() => {
  document.getElementsByTagName("article")[0].style.left = -100 + "%";
  //document.getElementsByTagName("aside")[0].style.position = "unset";
}, 600);
