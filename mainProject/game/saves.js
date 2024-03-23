function moduleArrOfPosXValue() {
  let arr = [];
  for (let i = 0; i < dotsArr.length; i++) {
    const elem = searchElem(i);
    arr[i] = numArr[elem].value;
  }
  return arr;
}

console.log(localStorage);

function saveData(isAvailable) {
  let newScore = Number(score.innerText);
  var JSONme = JSON.stringify(numArr);
  var newGame = new PreviousGames(isAvailable, numArr, numar, newScore);
  localStorage[localStorage.length] = JSON.stringify(newGame);
  console.log(localStorage[localStorage.length - 1]);
}

class PreviousGames {
  constructor(isAvailable, arr, num, score) {
    this.author = "nkrch";
    this.isAvailable = isAvailable;
    this.arr = arr;
    this.num = num;
    this.score = score;
  }
}
