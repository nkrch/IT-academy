function ObjStorageFunc(name11, alcohol1, ingridients1) {
  const self = this; // спасаем this и упрощаем себе жизнь
  allDrinks = [];
  this.name1 = name11; // публ. свойство - элемент объекта this/self
  this.alcohol = alcohol1;
  this.ingridients = ingridients1;

  this.addValue = function (key, value) {
    allDrinks[key] = value;
  };

  this.getValue = function (key) {
    // публ. метод - элемент объекта this/self
    return allDrinks[key];
  };

  this.deleteValue = function (key) {
    delete allDrinks[key];
    for (let i = key; i + 1 < allDrinks.length; i++) {
      allDrinks[i] = allDrinks[i + 1];
    }
    allDrinks[key] = allDrinks[key + 1];
  };
  this.getKeys = function () {
    return Object.keys(allDrinks);
  };
}

let margarita = new ObjStorageFunc();
/*(this.name1 = ""),
  (margarita.alcohol = true),
  (ingridients = )*/

margarita.name1 = "Маргарита";
margarita.alcohol = true;
margarita.ingridients = "продукт, продукт... смешать...";
allDrinks[allDrinks.length] = {
  name1: margarita.name1,
  alcohol: margarita.alcohol,
  ingridients: margarita.ingridients,
};

function inputFunc() {
  var name1 = prompt("Введите название напитка");
  var alcohol = confirm("Градусы присутствуют?");
  var ingridients = prompt("Введите рецепт");

  allDrinks[allDrinks.length] = {
    name1: name1,
    alcohol: alcohol,
    ingridients: ingridients,
  };
  if (alcohol) {
    var express = "да";
  } else {
    var express = "нет";
  }
  alert(`напиток ${name1}
алкогольный: ${express}
рецепт приготовления:
${ingridients}`);
  showAllDrinks();
}

function showAllDrinks() {
  const docBlock = document.getElementById("show");
  var textCon = "";
  allDrinks.forEach((element) => {
    if (element.alcohol) {
      var express = "да";
    } else {
      var express = "нет";
    }
    textCon += `
    <h3>${element.name1}</h3>
    напиток ${element.name1}
    алкогольный: ${express}
    рецепт приготовления:
    ${element.ingridients}`;
  });
  docBlock.innerHTML = textCon;
}

function getInfo() {
  var check = false;
  toFind = prompt("Введите название напитка");
  for (let i = 0; i < allDrinks.length; i++) {
    if (allDrinks[i].name1 == toFind) {
      if (allDrinks[i].alcohol) {
        var express = "да";
      } else {
        var express = "нет";
      }
      check = true;
      alert(`напиток ${allDrinks[i].name1}
    алкогольный: ${express}
    рецепт приготовления:
    ${allDrinks[i].ingridients}`);
    }
  }
  if (!check) {
    alert("Нет такого напитка");
  }
}

function deleteThis() {
  var check = false;
  console.log(allDrinks);
  toFind = prompt("Введите название напитка");
  for (let i = 0; i < allDrinks.length; i++) {
    if (allDrinks[i].name1 == toFind) {
      delete allDrinks[i];
    }
  }
  showAllDrinks();
}
