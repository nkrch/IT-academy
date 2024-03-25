function modal(num) {
  numar = num;
  //animation

  console.log("newGame");
  modalW.style.opacity = 0;
  modalW.style.transitionDuration = "0.6s";
  grid(num);
  setTimeout(modalDisap, 600);

  return num;

  function modalDisap(params) {
    modalW.style.position = "unset";
  }
  function grid(num) {
    window.onbeforeunload = function (event) {
      if (!restart) {
        event.preventDefault();
      
      alert("Данные не сохранены. Точно перейти?");
      }
      saveData(true);
    };

    let gridStr = "";
    let gap;
    let width = game.offsetWidth - 50;
    let field = (width * 0.9) / num;
    gap = (width * 0.1) / (num - 1);
    for (let i = 0; i < num; i++) {
      gridStr += field + "px ";
    }
    num2 = num * num;
    for (let i = 0; i < num2; i++) {
      const elem = document.createElement("div");
      elem.className = "fieldDot";
      elem.id = "e" + (i + 1);
      elem.style.width = field + "px";
      elem.style.height = field + "px";

      elem.style.borderRadius = gap * 0.5 + "px";
      game.insertAdjacentElement("beforeend", elem);
    }

    game.style.gridTemplateColumns = gridStr;
    game.style.gridTemplateRows = gridStr;
    game.style.gap = gap + "px " + gap + "px";
  }
}
