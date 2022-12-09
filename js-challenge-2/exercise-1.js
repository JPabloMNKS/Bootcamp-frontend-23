// write a js program to the smallest number in the array
// Output: 2

let arr1 = [12, 6, 10, 2, 45, 100];

console.log(arr1.reduce((a, b) => Math.min(a, b)));
