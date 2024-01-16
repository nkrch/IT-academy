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

  let colorName = [],
    n;
  console.log("цветов: " + colorsCount);
  for (let i = 1; i <= colorsCount; i++) {
    do {
      n = randomDiap(1, 7);
    } while (colorName.includes(colors[n]));
    colorName[i] = colors[n];

    console.log(colorName[i]);
  }
}

mood(3);
