///////////////////////////////////
///////Node exercise////////////
//////////////////////////////////

const url = require("url");
const qs = require("querystring");

//console.log("qs path: ", qs.parse("scroll=infinite&cohort=dill"));

console.log("my url: ", url);
console.log(
  "my url path: ",
  url.parse(
    "https://www.google.com/search?q=what+is+typescript&rlz=1C1CHBF_enDE871DE872&oq=what+is+type&aqs=chrome.0.0j69i57j0l6.5637j0j1&sourceid=chrome&ie=UTF-8?name=ravi"
  )
);
//console.log("process.argv: ", process.argv[2]);
var newUrl = url();

console.log(url.parse(process.argv[2]));
console.log(newUrl);

//------------------------------------------------;

/* console.log("this is my node file");
console.log(__dirname);
console.log(__filename); 
console.log("process.argv: ", process.argv);
console.log("module: ", module);
console.log("module.exports: ", module.exports); */

//to get into the file we need to REQUIRE it!
/* const funStuff = require("./fun.js");
console.log("funstuff: ", funStuff);

funStuff.sayHello();
funStuff.addMyFunction();
console.log(funStuff); */

//const { sayHello, addMyFunction } = require("./fun.js");

///////////////////////////////////
///////CORE NODE MODULE////////////
//////////////////////////////////

/* const url = require("url");
const qs = require("querystring");

//console.log("qs path: ", qs.parse("scroll=infinite&cohort=dill"));

console.log("my url: ", url);
console.log(
  "my url path: ",
  url.parse(
    "https://www.google.com/search?q=what+is+typescript&rlz=1C1CHBF_enDE871DE872&oq=what+is+type&aqs=chrome.0.0j69i57j0l6.5637j0j1&sourceid=chrome&ie=UTF-8?name=ravi"
  )
);
console.log("process.argv: ", process.argv[2]);

console.log(url.parse(process.argv[2])); */

///////////////////////////////////
///////THIRD PARTY PACKAGES////////////
//////////////////////////////////

/* const chalk = require("chalk");
console.log("my chalk: ", chalk.magentaBright("love this color"));
console.log("my chalk: ", chalk.redBright("love this color"));
console.log("my chalk: ", chalk.yellowBright("love this color"));
console.log("my chalk: ", chalk.bgWhiteBright.red("love this color"));
 */
///////////////////////////////////
///////EVENT EMITTERS////////////
//////////////////////////////////

/* process.on("beforeExit", function () {
  console.log("just about to exit");
});

process.on("donut", function () {
  console.log("I need a donut!!!");
});

process.emit("donut");
process.emit("beforeExit"); */

///////////////////////////////////
///////CALLBACKS////////////
//////////////////////////////////

/* function getUser(callback) {
  setTimeout(function () {
    console.log("about to return the object");
    const user = {
      name: "ravi",
      age: 28,
    };
    callback(user);

    /* return {
      name: "ravi",
      age: 28,
    }; */
/*}, 2000);
}
 */
/* const userData = getUser(function (userDetails) {
  console.log("myuserdata: ", userDetails);
}); */
