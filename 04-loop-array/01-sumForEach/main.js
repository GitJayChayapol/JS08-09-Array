const array = [29, 17, 13, 47, 23, 31];
let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum = array[i] + sum;
// }
// console.log(sum);

array.forEach((a) => (sum += a));
console.log(sum);
