var str = prompt("Введите строку на русском или английском");
const vowels = "aieouyAIEOUYауоиэыяюеёАУОИЭЫЯЁЕ";
var vowl = function () {
  let vowl = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) vowl++;
  }
  return vowl;
};

console.log(vowl());
