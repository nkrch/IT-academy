window.addEventListener("keydown", onKeyPRE);

function onKeyPRE(event) {
  if (!moving) {
    onKey(event);
  }
}

function onKey(ev) {
  console.log(ev.key);
  wasChanched = false;
  numArr.forEach((element) => {
    if (element.addr) {
      element.addr.style.transitionDuration = 300 + "ms";
    }
  });
  /*
    ArrowUp w
  ArrowLeft a
  ArrowDown s
  ArrowRight d */
  if (!moving) {
    moving = true;
    swtchCase(ev);
    summary(ev);
    if (wasChanched) {
      usualPlay()
    }
  }
  
}

function scoreFunc(meaning) {
  const score = document.getElementById("score");
  let newScore = Number(score.innerText) + meaning;
  let add = "";
  for (let i = 0; i < 8 - String(newScore).length; i++) {
    add += "0";
  }

  score.innerText = add + newScore;
}
