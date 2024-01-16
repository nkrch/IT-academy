var arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];

function toCount(arra) {
  let sum = 0;
  for (let i = 0; i < arra.length; i++) {
    if (typeof arra[i] === "object") {
      //object
      var newsum = toCount(arra[i]);
      sum += newsum;
    } else {
      //number
      if (typeof arra[i] !== "number") {
        console.log("NO");
        //sum += parseInt(arra[i]);
        console.log("15" + arra[i]);
      } else {
        sum += arra[i];
      }
    }
  }
  return sum;
}

console.log(toCount(arr));
