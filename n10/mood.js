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
  var arr = [];
  console.log("цветов: " + colorsCount);
  for (let i = 1; i <= colorsCount; i++) {
    var n = randomDiap(1, 7);
    while (arr.includes(n)) {
      n = randomDiap(1, 7);
    }
    arr[arr.length] = n;
    const colorName = colors[n];
    console.log(colorName);
  }
}

mood(3);
