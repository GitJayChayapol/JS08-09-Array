const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

const summary = [];

sales.forEach((a) => {
  sum = a.price * (1 - a.discount || 0);
  net = a.price - sum;
  summary.push({ netPrice: net });
});
console.log(summary);

// WalkThrough Array (loop)
// each item = Object
// access Object => dot , bracket
const newArr = [];
for (let productObj of sales) {
  let price = productObj.price;
  let discount = productObj.discount;
  let netPrice = price;
  if (discount) {
    netPrice = price * (1 - discount);
  }
  const newObj = { netPrice: netPrice };
  newArr.push(newObj);
}
console.log(newArr);
console.log(sales);
