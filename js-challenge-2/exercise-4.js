// Write a JS program to concat arrays.
// Sample: let data = [
// ["The", "little", "horse"],
// ["Plane", "over", "the", "ocean"],
// ["Chocolate", "ice", "cream", "is", "awesome"],
// ["this", "is", "a", "long", "sentence"]
// ]
// Output: ['The little horse', 'Plane over the ocean', ‘Chocolate ice cream is
// awesome', 'this is a long sentence']

let data = [
  ["The", "little", "horse"],
  ["Plane", "over", "the", "ocean"],
  ["Chocolate", "ice", "cream", "is", "awesome"],
  ["this", "is", "a", "long", "sentence"],
];

var integrado = data.reduce((a, b) => 
   a.concat(b)
,[]);

var integrado2 = data.join(' ');

console.log(integrado);
console.log(integrado2);
