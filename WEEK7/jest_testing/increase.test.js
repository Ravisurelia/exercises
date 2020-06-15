const { increase } = require("./increase");
//test is a function from jest
//takes 2 argmts
//first, is a string describing the test
//second is a callback functin that runs the test
test("Passing the string here: ", () => {
  const results = increase(NaN); //call function like normal
  expect(results).toBe("ERROR!");
});

test("passsing 0 produces the error!!", () => {
  const results = increase(0);
  expect(results).toBe("ERROR!");
});

test("passsing a number smaller than 0 produces the error!!", () => {
  const results = increase(-1);
  expect(results).toBe("ERROR!");
});

test("passsing a number greater than 0 produces the number multiply by 10 until it is geater than 1000000", () => {
  const results = increase(2);
  expect(results).toBeGreaterThanOrEqual(1000000);
});
