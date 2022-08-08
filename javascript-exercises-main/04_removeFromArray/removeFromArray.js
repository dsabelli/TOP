const removeFromArray = function (arr, item, ...args) {
  const result = arr.filter((el) => el !== item);

  filtered = result.filter((el) => args.includes(el) == false);

  return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
