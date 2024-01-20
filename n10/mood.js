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

  if (colorsCount > 7) {
    alert("You cannot get more than 7 colors");
    throw console.error("You cannot get more than 7 colors");
  }

  let colorName = {},
    n,
    repeat = false;
  console.log(typeof colorName);
  console.log("цветов: " + colorsCount);
  for (let i = 1; i <= colorsCount; i++) {
    do {
      repeat = false;
      n = randomDiap(1, 7);
      for (const key in colorName) {
        if (colorName.hasOwnProperty.call(colorName, key)) {
          if (colorName[key] == colors[n]) {
            repeat = true;
          }
        }
      }
    } while (repeat);
    colorName[i] = colors[n];

    console.log(colorName[i]);
  }
}

mood(3);
