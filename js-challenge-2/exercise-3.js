// Write a JS program to remove duplicates in an array.
// Sample: let arr2 = [7, 9, 1, 'a', 'a', 'f', 9 , 4, 2, 'd', 'd']
// Output: [7, 1, ‘f’, 4, 2]

let arr2 = [7, 9, 1, "a", "a", "f", 9, 4, 2, "d", "d"];

const removeDuplicates = (arr) =>
  arr.filter((item, index) => {
    arr.splice(index, 1);
    const result = !arr.includes(item);
    arr.splice(index, 0, item);
    return result;
  });

console.log(removeDuplicates(arr2));
