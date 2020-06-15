module.exports.increase = function (n) {
  if (isNaN(n) || n <= 0) {
    return "ERROR!";
  }
  while (n < 1000000) {
    n *= 10;
  }
  return n;
};
