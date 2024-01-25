drinkStorage = {};
class ObjStorageClass {
  constructor(name1, alcohol, ingridients) {
    this.name1 = name1; // публ. свойство - элемент объекта this/self
    this.alcohol = alcohol;
    this.ingridients = ingridients;
  }

  addValue = function (key, value) {
    drinkStorage[key] = value;
  };

  getValue = function (key) {
    // публ. метод - элемент объекта this/self
    return drinkStorage[key];
  };

  deleteValue = function (key) {
    drinkStorage[key].delete;
    /*for (let i = key; i + 1 < drinkStorage.length; i++) {
      drinkStorage[i] = drinkStorage[i + 1];
    }
    drinkStorage[key] = drinkStorage[key + 1];*/
    drinkStorage = drinkStorage.filter(function (el) {
      return el.name1 != "";
    });
  };
  getKeys = function () {
    return Object.keys(drinkStorage);
  };
}

/*<button onclick="inputFunc()">ввод информации о напитке</button>
            <button onclick="getInfo()">получение информации о напитке</button>
            <button onclick="deleteThis()">удаление информации о напитке</button>
            <button onclick="showdrinkStorage()">перечень всех напитков</button>
 */

function inputFunc() {
  let name1 = prompt("Введите название напитка");
  let isAlcohol = confirm("Напиток является алкогольным?");
  let isAlcoholString;
  isAlcoholString = isAlcohol ? "да" : "нет";
  let ingridients = prompt("Введите рецепт");

  drinkStorage[name1] = {
    name: name1,
    alcohol: isAlcoholString,
    ingridients: ingridients,
  };
  console.log(drinkStorage);
}

function getInfo() {
  let forSearch = prompt("Введите название напитка");
  let isFound = false;
  for (const key in drinkStorage) {
    if (drinkStorage.hasOwnProperty.call(drinkStorage, key)) {
      if (key == forSearch) {
        alert(`Название напитка: ${key}
Алкогольный ли: ${drinkStorage[key].alcohol}
Рецепт: ${drinkStorage[key].ingridients}`);
        isFound = true;
      }
    }
  }
  if (!isFound) {
    alert("Напиток не найден");
  }
}
function showDrinkStorage() {
  let demonstration = "";
  for (const key in drinkStorage) {
    if (drinkStorage.hasOwnProperty.call(drinkStorage, key)) {
      demonstration += `<h3>${key}</h3>
      Название напитка: ${key}<br>
      Алкогольный ли: ${drinkStorage[key].alcohol} <br>
      Рецепт: ${drinkStorage[key].ingridients}<br>
      `;
    }
  }
  document.getElementById("show").innerHTML = demonstration;
}

function deleteThis() {
  forSearch = prompt("Что нужно удалить?");
  let isFound = false;
  for (const key in drinkStorage) {
    if (drinkStorage.hasOwnProperty.call(drinkStorage, key)) {
      if (key == forSearch) {
        delete drinkStorage[key];
        isFound = true;
      }
    }
  }
  if (!isFound) {
    alert("Напиток не найден");
  }
  console.log(drinkStorage);
  showDrinkStorage();
}
