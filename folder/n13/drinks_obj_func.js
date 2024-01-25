function ObjStorageFunc() {
  var storage = {};

  this.addValue = function (key, value) {
    this[key] = value;
  };

  this.getValue = function (key) {
    if (this[key]) {
      return this[key];
    } else {
      return false;
    }
  };

  this.deleteValue = function (key) {
    if (this[key]) {
      delete this[key];
      return true;
    } else {
      return false;
    }
  };
  this.getKeys = function () {
    return Object.keys(this);
  };
}

let drinkStorage = new ObjStorageFunc();

function inputFunc() {
  var name1 = prompt("Введите название напитка");
  var isAlcohol = confirm("Напиток является алкогольным?");
  let alcohol;
  if (isAlcohol) {
    alcohol = "да";
  } else {
    alcohol = "нет";
  }
  let ingridients = prompt("Введите рецепт напитка");
  drinkStorage.addValue(name1, { alcohol, ingridients });
  console.log(drinkStorage);
}
function getInfo() {
  var toFind = prompt("Введите название напитка");
  var gotten = drinkStorage.getValue(toFind);
  console.log(gotten);
  if (!gotten) {
    alert("Напиток не найден");
  } else {
    alert(`
    Название напитка: ${toFind}
    Напиток алкогольный: ${gotten.alcohol}
    Рецепт напитка: ${gotten.ingridients}`);
  }
}
function deleteThis() {
  var toFind = prompt("Введите название напитка");
  var gotten = drinkStorage.deleteValue(toFind);
  if (!gotten) {
    alert("Напиток не найден");
  }
  console.log(drinkStorage);
}
function showDrinkStorage() {
  var stringOfAll = "";
  for (const key in drinkStorage) {
    if (
      key != "addValue" &&
      key != "deleteValue" &&
      key != "getKeys" &&
      key != "getValue"
    ) {
      stringOfAll += `
    <h3>${key}</h3>
    Напиток алкогольный: ${drinkStorage[key].alcohol}<br>
    Рецепт напитка: ${drinkStorage[key].ingridients}<br>`;
    }
  }
  document.getElementById("show").innerHTML = stringOfAll;
}
