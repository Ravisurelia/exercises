module.exports = function fn(arg) {
  //a string as first argument
  if (typeof arg == "string") {
    let string2 = "";
    for (let i = arg.length - 1; i >= 0; i--) {
      string2 += arg[i];
    }
    return string2;
  }

  //neither a string nor an array as first argument
  if (!Array.isArray(arg) && typeof arg != "string") {
    return null;
  }

  //an array as first argument
  if (Array.isArray(arg)) {
    let string3 = "";
    for (let i = arg[0].length - 1; i >= 0; i--) {
      string3 += arg[0][i];
    }
    let array1 = [string3, null];
    return array1;
  }
};

/////results for exrecise
/* > jest

 PASS  exercises/1/countries.test.js
 PASS  exercises/2/albums.test.js
 PASS  exercises/3/fn.test.js

Test Suites: 3 passed, 3 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        6.243 s
Ran all test suites. */
