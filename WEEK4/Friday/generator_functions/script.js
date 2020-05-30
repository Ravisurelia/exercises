function* gen() {
  for (let i = 0; i < 101; i++) {
    if (i === 0) {
      yield i;
    } else if (i % 3 === 0) {
      yield "fizz";
    } else if (i % 5 === 0) {
      yield "buzz";
    } else if (i % 3 === 0 && i % 5 === 0) {
      yield "fizzbuzz";
    } else {
      yield i;
    }
  }
  const fizz = gen();

  for (let val of fizz) {
    Console.log(val);
  }
}

_____________________________________________________________;

function* myReversedArray(arr) {
  for (let i = numbers.length - 1; i >= 0; i--) {
    yield arr[i];
  }
  //we can also use push and unshift method to reverse the array.
}

let array1 = [80, 50, 90];
let arry2 = myReversedArray(array1);
console.log(array1);
Console.log(myReversedArray.next());
Console.log(myReversedArray.next());
Console.log(myReversedArray.next());
