function addArrayNumbers(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(addArrayNumbers(numbers)); // 15
