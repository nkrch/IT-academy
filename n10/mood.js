function randomDiap(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
  const colors = [
    "",
    "красный",
    "оранжевый",
    "жёлтый",
    "зелёный",
    "голубой",
    "синий",
    "фиолетовый",
  ];

  let colorName = {},
    n,
    repeat = false;
  console.log("цветов: " + colorsCount);

  for (let i = 1; i <= colorsCount; i++) {
    do {
      repeat = false;
      n = randomDiap(1, 7);
      if (n in colorName) {
        repeat = true;
      }
    } while (repeat);
    colorName[n] = colors[n]; //ключ - номер цвета
    console.log(colorName[n]);
  }
  console.log(colorName);
}

mood(3);
