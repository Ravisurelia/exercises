module.exports.dbl = function (n) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (isNaN(n)) {
        reject("bad number! cannot double it");
      } else {
        resolve(n * 2);
      }
    }, 2000);
  });
};
