////exercise 1
let reverseArray = (array) => {
  let newArray = [...array].reverse();
  return newArray;
};
////test
/* let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverse(newArray); */
////[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
-------------------------------------------------------------------------;

//////exercise 2

let myArray = (array1, array2) => {
  let combinedArray = [[...array1], [...array2]];
  return combinedArray;
};
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
////output will be 
let combinedArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];
-------------------------------------------------------------------------;

///////exercise 3

/* function logInfo(city) {
    const name = city.name;
    const country = city.country;
    const numPeople = city.population;

    console.log(
        `${name} is in ${country} and has ${numPeople} in it.`
    );
}
 */

function logInfo(city) {
    const {name, country, numPeople} = city;
    console.log(
        `${name} is in ${country} and has ${numPeople} in it.`
    );
}
-------------------------------------------------------------------------;

/////exercise 4




