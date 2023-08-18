let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

let min = arr.reduce((acc, item) => {
  if (item >= acc) {
    acc = acc;
  } else if (item <= acc);
  {
    acc = item;
  }
  return acc;
});

console.log(min);
