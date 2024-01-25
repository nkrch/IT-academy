const formDef1 = [
  { label: "Название сайта:", kind: "longtext", name: "sitename" },
  { label: "URL сайта:", kind: "longtext", name: "siteurl" },
  { label: "Посетителей в сутки:", kind: "number", name: "visitors" },
  { label: "E-mail для связи:", kind: "shorttext", name: "email" },
  {
    label: "Рубрика каталога:",
    kind: "combo",
    name: "division",
    variants: [
      { text: "здоровье", value: 1 },
      { text: "домашний уют", value: 2 },
      { text: "бытовая техника", value: 3 },
    ],
  },
  {
    label: "Размещение:",
    kind: "radio",
    name: "payment",
    variants: [
      { text: "бесплатное", value: 1 },
      { text: "платное", value: 2 },
      { text: "VIP", value: 3 },
    ],
  },
  { label: "Разрешить отзывы:", kind: "check", name: "votes" },
  { label: "Описание сайта:", kind: "memo", name: "description" },
  { caption: "Опубликовать", kind: "submit" },
];

const formDef2 = [
  { label: "Фамилия:", kind: "longtext", name: "lastname" },
  { label: "Имя:", kind: "longtext", name: "firstname" },
  { label: "Отчество:", kind: "longtext", name: "secondname" },
  { label: "Возраст:", kind: "number", name: "age" },
  { caption: "Зарегистрироваться", kind: "submit" },
];
let form = document.createElement("form");

document
  .getElementsByTagName("body")[0]
  .insertAdjacentElement("afterbegin", form);

function formBuild(formInputs) {
  let newForm = `<form action='https://fe.it-academy.by/TestForm.php'>`;

  for (let num = 0; num < formInputs.length; num++) {
    var type;

    switch (formInputs[num].kind) {
      case "shorttext":
        type = "text";

        break;
      case "longtext":
        type = "text";
        break;
      case "number":
        type = "number";
        break;
      case "combo":
        type = "select";
        let options = "";
        for (let i = 0; i < formInputs[num].variants.length; i++) {
          options += `
          <option name='${formInputs[num].name}' value='${formInputs[num].variants[i].value}'>${formInputs[num].variants[i].text}</option>`;
        }
        newForm += `<label for='${formInputs[num].name}'>${formInputs[num].label}</label>
        <select>${options}</select><br>`;

        break;
      case "memo":
        type = "textarea";

        newForm += `<label for='${formInputs[num][name]}'>${formInputs[num].label}</label>
          <textarea name=${formInputs[num][name]} type='${type}'></textarea><br>`;
        break;
      case "check":
        type = "checkbox";
        break;
      case "submit":
        type = "submit";
        newForm += `<button type='${type}'>${formInputs[num].caption}</button>`;
        break;
    }
    if (type == "text" || type == "number" || type == "checkbox") {
      newForm += `<label for='${formInputs[num][name]}'>${formInputs[num].label}</label>
        <input name=${formInputs[num][name]} type='${type}'><br>`;
    }
  }

  newForm += `</form><br><hr>`;
  form.insertAdjacentHTML("beforeend", newForm);
}

formBuild(formDef1);
formBuild(formDef2);
