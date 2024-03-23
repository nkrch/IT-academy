window.addEventListener("resize", windChange);
function windChange(params) {
  if (numArr) {
    numArr.forEach((element) => {
      element.addr.style.transitionDuration = 0 + "ms";
      setTimeout(() => {
        element.addr.style.left =
          dotsArr[element.position].addr.offsetLeft + "px";
        element.addr.style.top =
          dotsArr[element.position].addr.offsetTop + "px";
        setTimeout(() => {
          element.addr.style.transitionDuration = 350 + "ms";
        }, 5);
      }, 5);
    });
  }
}
