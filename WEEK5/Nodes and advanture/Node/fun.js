/* function sayHello() {
  console.log("Hello fun.js");
}

function add(a,b) {
  return a + b;
}

module.exports.sayHello = sayHello;
module.exports.addMyFunction = add; */

module.exports.sayHello = function () {
  console.log("Haaaaaaalllllllllloooooooooooo");
};

module.exports.addMyFunction = function add(a, b) {
  return a + b;
};

///////////// ANOTHER WAY TO EXPORT THE FILE ------
