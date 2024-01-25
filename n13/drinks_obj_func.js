function ObjStorageFunc(name11, alcohol1, ingridients1) {
  const self = this; // спасаем this и упрощаем себе жизнь
  drinkStorage = {};
  this.name1 = name11; // публ. свойство - элемент объекта this/self
  this.alcohol = alcohol1;
  this.ingridients = ingridients1;

  this.addValue = function (key, value) {
    drinkStorage[key] = value;
  };

  this.getValue = function (key) {
    // публ. метод - элемент объекта this/self
    return drinkStorage[key];
  };

  this.deleteValue = function (key) {
    drinkStorage[key].delete;
    /*for (let i = key; i + 1 < drinkStorage.length; i++) {
      drinkStorage[i] = drinkStorage[i + 1];
    }
    drinkStorage[key] = drinkStorage[key + 1];*/
    drinkStorage = drinkStorage.filter(function (el) {
      return el.name1 != "";
    });
  };
  this.getKeys = function () {
    return Object.keys(drinkStorage);
  };
}

let margarita = new ObjStorageFunc();
/*(this.name1 = ""),
  (margarita.alcohol = true),
  (ingridients = )*/

margarita.name1 = "Маргарита";
margarita.alcohol = true;
margarita.ingridients = "продукт, продукт... смешать...";

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
