/* countries.js exports a find function to which you can pass a string and get back an array containing up to four countries that begin with that string. In countries.test.js you should write tests that confirm that this function is working correctly. The important things to test are:
When find is passed an empty string, it returns an empty array
The array that it returns contains no more than four matches
The search is case insensitive
If there are no matching countries, an empty array is returned */
const countries = require("./countries");

//1. When find is passed an empty string, it returns an empty array
test("When find is passed an empty string, it returns an empty array", () => {
  expect(countries.find("")).toEqual([]);
});

//2.The array that it returns contains no more than four matches
test("The array that it returns contains no more than four matches", () => {
  expect(countries.find("I")).toHaveLength(4);
});

//3.The search is case insensitive
test("The search is case insensitive", () => {
  expect(countries.find("I")).toEqual(countries.find("i"));
});

//4.If there are no matching countries, an empty array is returned
test("If there are no matching countries, an empty array is returned ", () => {
  expect(countries.find("No results found!!")).toEqual([]);
});
