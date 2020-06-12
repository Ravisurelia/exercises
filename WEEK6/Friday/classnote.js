const { promisifiedFirst } = require("./promisified"); //have not created this file
const { double } = require("./double");

function first(callback) {
  setTimeout(function () {
    console.log(1);
    callback();
  }, 2000);
}

function two() {
  console.log(2);
}
console.log("promisified: ", promisifiedFirst());
promisifiedFirst().then(() => {
  //this will run the first and then two this is what promises do
  two();
});
/* first(function () {
  two();
}); */
////promise is one of the three states
//1. pending -action is not yet complete
//2. resolved -everything went well
//3. rejected - something went wrong.....
//once the promise is resolved or rejected , it becomes settled....

///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////twitter api-2 ----Andrea's lecture notes
