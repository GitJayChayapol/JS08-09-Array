let str = "I live in Thailand";
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
let c = str.toLocaleLowerCase().split("");
const b = c.filter((item) => item != " ");

const a = {};
function reducer(acc, item) {
  if (!acc[item]) {
    acc[item] = 1;
  } else {
    acc[item]++;
  }
  return acc;
}
const num = b.reduce(reducer, a);
console.log(num);
