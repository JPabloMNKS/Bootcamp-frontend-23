// Write a JS program to find the least frequent item of an array
// Output : 4

let arr1 = [3, "c", "c", "a", 2, 3, "c", 3, "c", 2, 4, 9, 9];

const leatFrequent = (arr) =>
  arr.filter((item, index) => {
    arr.splice(index, 1);
    const result = !arr.includes(item);
    arr.splice(index, 0, item);
    return result;
  });

console.log(leatFrequent(arr1));
