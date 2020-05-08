// method 1-simplest
var array = [1, 2, 3];
var newArray = array.reverse(array);
console.log(newArray);

// method 2- with for loop
var reverseArray = []; 
for(var i = array.length-1; i>=0; i--) {
  reverseArray.push(array[i]);
}

console.log(reverseArray);