const images = document.getElementsByTagName("img");

window.addEventListener("mousemove", mouseMove);

function mouseMove(event) {
  // если "ЛКМ" зажата
  if (Mouse.left) {
    Mouse.posX = event.clientX; // текущая координата по оси Х
    Mouse.posY = event.clientY; // текущая координата по оси Y
    imageMove();
  }
}

//введём объект, который будет хранить в себе целевое изображение, начальные и настоящие x и y, нажата ли кнопка мыши, исконный zIndex
let Mouse = {
  targetImage: null,
  posX: null,
  posY: null,
  dx: null,
  dy: null,
  left: false,
  zIndexBuf: null, //для запоминания положения на странице
};

for (let i = 0; i < images.length; i++) {
  images[i].onmousedown = imageMouseDown;
  images[i].onmouseup = imageMouseUp;
  images[i].style.zIndex = i; //присваиваем каждому z-index
}

function imageMouseDown(event) {
  if (event.button == 0) {
    this.style.cursor = "pointer";
    event.preventDefault();
    Mouse.targetImage = this;
    Mouse.zIndexBuf = this.style.zIndex;
    console.log(Mouse.zIndexBuf);
    this.style.zIndex = 5;
    Mouse.left = true;

    //где событие
    Mouse.posX = event.clientX;
    Mouse.posY = event.clientY;

    Mouse.dx = event.layerX;
    console.log(Mouse.dx, Mouse.posX);
    Mouse.dy = event.layerY;

    imageMove();
  }
}

function imageMouseUp() {
  this.style.cursor = "default";
  Mouse.left = false;
  this.style.zIndex = Mouse.zIndexBuf;
  Mouse.targetImage = null;
  Mouse.zIndexBuf = null;
}

function imageMove() {
  if (Mouse.left) {
    //двигаем изображение
    Mouse.targetImage.style.top = Mouse.posY - Mouse.dy + "px";
    Mouse.targetImage.style.left = Mouse.posX - Mouse.dx + "px";
  }
}
