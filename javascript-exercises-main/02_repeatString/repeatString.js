const repeatString = function (str, num) {
  if (num === 0) return "";
  else if (num < 0) return "ERROR";
  else if (num <= 1) return str;
  return str + repeatString(str, num - 1);
};

// Do not edit below this line
module.exports = repeatString;
