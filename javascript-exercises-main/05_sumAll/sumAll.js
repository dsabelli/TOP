const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) return "ERROR";
  else if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
  else if (num1 > num2) {
    if (num1 === num2) return num2;
    return (num2 += sumAll(num1, num2 + 1));
  } else if (num1 === num2) return num2;
  return (num1 += sumAll(num1 + 1, num2));
};

// Do not edit below this line
module.exports = sumAll;
