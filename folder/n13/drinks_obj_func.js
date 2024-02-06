function ObjStorageFunc() {
  var storage = {};

  this.addValue = function (key, value) {
    console.log(storage);
    storage[key] = value;
  };

  this.getValue = function (key) {
    if (key in storage) {
      return storage[key];
    } else {
      return undefined;
    }
  };

  this.deleteValue = function (key) {
    if (key in storage) {
      delete storage[key];
      return true;
    } else {
      return undefined;
    }
  };
  this.getKeys = function () {
    return Object.keys(storage);
  };
}
console.log(ObjStorageFunc.storage);
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
  var keys = drinkStorage.getKeys();
  for (let i = 0; i < keys.length; i++) {
    var element = drinkStorage.getValue(keys[i]);
    console.log(element);
    stringOfAll += `
    <h3>${keys[i]}</h3>
    Напиток алкогольный: ${element.alcohol}<br>
    Рецепт напитка: ${element.ingridients}`;
  }

  document.getElementById("show").innerHTML = stringOfAll;
}
