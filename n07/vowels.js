var str = prompt("Введите строку на русском или английском");
const vowels = "aieouyAIEOUYауоиэыяюеёАУОИЭЫЯЁЕ";
var vowl = function (strk, vowel) {
  let vowl = 0;
  for (let i = 0; i < strk.length; i++) {
    if (vowel.includes(strk[i])) vowl++;
  }
  return vowl;
};

console.log(vowl(str, vowels));
