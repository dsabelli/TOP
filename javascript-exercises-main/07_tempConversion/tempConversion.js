const ftoc = function (num) {
  let n = (num - 32) * (5 / 9);

  return +n.toFixed(1);
};

const ctof = function (num) {
  let n = num * (9 / 5) + 32;

  return +n.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
