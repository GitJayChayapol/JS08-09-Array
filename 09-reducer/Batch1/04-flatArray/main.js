let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];
// let a = [];
// a = flattened.reduce((acc, item) => acc + item, a);
// console.log(a);

// expected result: [0, 1, 2, 3, 4, 5]

const flatArr = flattened.reduce((acc, subArr) => {
  for (let num of subArr) {
    acc.push(num);
  }
  return acc;
}, []);
console.log(flatArr);
