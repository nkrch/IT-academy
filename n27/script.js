var listeningElems = [];
var p = document.getElementsByTagName("p");
var isChanged = false,
  isChanged1 = false;
console.log(p);
listeningElems += document.getElementsByTagNameNS(
  "input",
  "textarea",
  "select"
);

/*developers
siteName
siteURL
dateOfStart
siteVisites
email
category
radio
responces
description
submit*/

var form = document.getElementsByName("form")[0];
console.log(form);
form[0].focus();
var developers = document.getElementsByName("developers");
var formObject = {};

for (let i = 0; i < form.length; i++) {
  formObject[form[i].name] = document.getElementsByName(form[i].name)[0];
  //console.log(formObject[form[i].name]);
}
console.log(form.length);
for (i = 0; i < form.length; i++) {
  form[i].addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter" || event.key === "Down") {
      // Cancel the default action, if needed
      event.preventDefault();
      blur(form[i]);
    }
  });
}

function mistake(num, mist) {
  p[num].innerText = "!" + mist + "!";
  if (mist == "") {
    p[num].innerText = mist;
  }
}

function clckForm() {
  form[7].click();
}

function clckForm1() {
  console.log("adaayaaaaa");
  form[10].click();
}

var isFirstError = false;
function main(num) {
  var hasError = false;

  console.log(num);
  //if (event.key === "Enter") {
  console.log("enter");

  switch (num) {
    case 0:
      var toCheck = form[num].value;
      console.log(toCheck);
      if (toCheck.length < 1) {
        var mist = "Вы ввели слишком маленькую строку";
        hasError = true;
        mistake(num, mist);

        if (!isFirstError) {
          form[0].focus();
          isFirstError = true;
        }
      } else {
        var mist = "";
        mistake(num, mist);
      }

      break;
    case 1:
      var toCheck = form[num].value;
      if (toCheck.length < 1) {
        var mist = "Вы ввели слишком маленькую строку";
        hasError = true;
        mistake(num, mist);
        if (!isFirstError) {
          form[1].focus();
          isFirstError = true;
        }
      } else {
        var mist = "";
        mistake(num, mist);
      }

      break;
    case 2:
      var toCheck = form[num].value;
      if (toCheck.length < 1) {
        var mist = "Вы ввели слишком маленькую строку";
        hasError = true;
        mistake(num, mist);
        if (!isFirstError) {
          form[2].focus();
          isFirstError = true;
        }
      } else {
        var mist = "";
        mistake(num, mist);
      }

      break;
    case 3:
      var toCheck = form[num].value;

      if (toCheck.length < 8) {
        var mist = "Введите дату в корректном формате";
        hasError = true;
        mistake(num, mist);

        if (!isFirstError) {
          form[3].focus();
          isFirstError = true;
        }
      } else if (toCheck < "1970-01-01") {
        var mist = "Вы не могли запустить сайт ранее 1970";
        hasError = true;
        mistake(num, mist);

        if (!isFirstError) {
          form[3].focus();
          isFirstError = true;
        }
      } else {
        var mist = "";
        mistake(num, mist);
      }

      break;
    case 4:
      var toCheck = form[num].value;
      if (toCheck.length < 1) {
        var mist = "Вы ввели слишком маленькую строку";
        hasError = true;

        if (!isFirstError) {
          form[4].focus();
          isFirstError = true;
        }
        mistake(num, mist);
      } else if (typeof Number(toCheck) != "number") {
        var mist = "Вы ввели не номер";
        if (!isFirstError) {
          form[4].focus();
          isFirstError = true;
        }
        hasError = true;
        mistake(num, mist);
      } else {
        var mist = "";
        mistake(num, mist);
      }

      break;
    case 5:
      var toCheck = form[num].value;
      if (toCheck.length < 1) {
        var mist = "Вы ввели слишком маленькую строку";
        hasError = true;

        if (!isFirstError) {
          form[5].focus();
          isFirstError = true;
        }
        mistake(num, mist);
      } else {
        var mist = "";
        mistake(num, mist);
      }
      break;
    case 6:
      console.log("ok");
      //document.getElementsByClassName("radio").focus();

      /*document.getElementById("free").focus();
      document.getElementById("free").click();
*/

      var toCheck = form[num].value;
      if (toCheck == "3") {
        console.log("!!!!!");
        if (!isFirstError) {
          form[6].focus();
          isFirstError = true;
        }
        const mist = "help";
        console.log(p[6]);
        p[6].innerText = mist;
        console.log(p[6]);
      }
      var rad = document.getElementsByClassName("radio");
      var checked = false;
      for (let i = 0; i < rad.length; i++) {
        if (rad[i].value) {
          checked = true;
        }
      }
      if (!checked) {
        var mist = "Выберите вариант";
        hasError = true;

        mistake(7, mist);
      } else {
        var mist = "";
        mistake(num, mist);
      }
      break;
    case 7:
      break;
    case 8:
      //document.getElementById("checkbox").click();

      var rad = document.getElementsByClassName("radio");
      var checked = false;
      for (let i = 0; i < rad.length; i++) {
        console.log(rad[i].value);
        if (rad[i].checked) {
          checked = true;
        }
      }
      if (!checked) {
        var mist = "Выберите вариант";
        hasError = true;

        if (!isFirstError) {
          console.log("jjhhbgvbtdbf c fc ggh");
          clckForm();
          isFirstError = true;
        }

        mistake(7, mist);
      } else {
        var mist = "";
        mistake(num, mist);
      }

      //document.getElementsByTagName("textarea")[0].focus();
      break;
    case 9:
      var toCheck = document.getElementsByTagName("textarea")[0].value;
      if (toCheck.length < 1) {
        var mist = "Вы ввели слишком маленькую строку";
        hasError = true;
        if (!isFirstError) {
          console.log("jjhhbgvbtdbf c fc ggh");
          form[11].focus();
          isFirstError = true;
        } else {
          mist = "";
        }
        mistake(8, mist);
      }
      break;

    default:
      console.log("check 10");
      break;
  }
  //if (num != 6) form[num + 1].focus();
  //}
  return hasError;
}

function prevent(event) {
  event.preventDefault(); // отменяем стандартное поведение формы
  // выполнение дополнительной обработки
  console.log("Форма не отправлена!");
}
var eventListener = form.addEventListener("submit", prevent);

function validation() {
  //form.preventDefault();
  var hasError = false;
  isFirstError = false;
  //document.getElementById("submit").preventDefault();
  console.log("validation");
  for (let i = 0; i <= 10; i++) {
    if (main(i)) {
      hasError = true;
    }

    /*if ((hasError = true && !isFirstFocused)) {
      //document.getElementsByTagName("input")[i].focus();
      form[i].focus();
      isFirstFocused = true;
    }*/
  }
  if (!isChanged) p[6].innerText = "Начальное значение ошибочно";
  if (!isChanged1)
    document.getElementById("resp").innerText = "Начальное значение ошибочно";
  else document.getElementById("resp").innerText = "";
  if (!hasError) {
    console.log(hasError + "success");

    /*form.addEventListener("submit", function (event) {
      event.preventDefault = false; // отменяем стандартное поведение формы
      // выполнение дополнительной обработки
      console.log("Форма отправлена!");
    });*/

    form.removeEventListener("submit", prevent);
  }
}
