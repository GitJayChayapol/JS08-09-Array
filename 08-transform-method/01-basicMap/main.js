const array = [1, 2, 30, 400];
const newArray = array.map((item) => item * 2);
console.log(newArray);

const arraya = [1, 2, 3, 4];
const newArraya = arraya.map((item) => item + "");
console.log(newArraya);
// // result: ["1", "2", "3", "4"]

const arrayb = [1, "1", 2, {}];
const newArrayb = arrayb.map((item) => typeof item);
console.log(newArrayb);
// // result: ["number", "string", "number", "object"]

const arrayc = ["apple", "banana", "orange"];
const newArrayc = arrayc.map((item) => item.toUpperCase());
console.log(newArrayc);
// // result: ["APPLE", "BANANA", "ORANGE"]

const arrayd = [1, 3, 4, 5, 6, 7, 8];
const newArrayd = arrayd.map((item) => {
  if (item % 2 == 0) return "even";
  else return "odd";
});
console.log(newArrayd);
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

const arraye = [1, -3, 2, 8, -4, 5];
const newArraye = arraye.map((item) => {
  if (item < 0) return item * -1;
  else return item;
});
console.log(newArraye);
// // result: [1, 3, 2, 8, 4, 5]

const arrayf = [100, 200.25, 300.84, 400.3];
const newArrayf = arrayf.map((item) => item.toFixed(2));
console.log(newArrayf);
// // result: ["100.00", "200.25", "300.84", "400.30"]

const arrayg = [0, 5, 10, 7, 6, 5, 0];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const newArrayg = arrayg.map((monthIndex) => months[monthIndex]);
console.log(newArrayg);
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const arrayh = [1, 16, 81, 256, 625, 1296];
const newArrayh = arrayh.map((item) => Math.sqrt(Math.sqrt(item)));
console.log(newArrayh);
// // result: [1, 2, 3, 4, 5, 6]

const arrayi = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
const newArrayi = arrayi.map((item) => item.name);
console.log(newArrayi);
// // result: ["apple", "banana", "watermelon"]

const arrayj = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
const newArrayj = arrayj.map((item) => item.age);
console.log(newArrayj);
// // result: [14, 18, 32]

const arrayk = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
const newArrayk = arrayk.map((item) => `${item.name},${item.surname}`);
console.log(newArrayk);
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]

const arrayl = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
let age = "";
const agel = arrayl.map((item) => {
  item.age = 2021 - item.birth.slice(0, 4);
  return;
});
console.log(arrayl);
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]

// INPUT : { name: "apple", birth: "2000-01-01" }, // JS OBJECT
// OUTPUT : "<tr><td>apple</td><td>01 jan 2000</td></tr>" // HTML TAG
const arraym = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const newArrayM = arraym.map(function (obj) {
  let name = obj.name;
  const day = obj.birth.slice(-2);
  const monthIndex = obj.birth.slice(-5, -3) - 1;
  const year = obj.birth.slice(0, 4);

  const resultString = `<tr><td>${name}</td><td>${day} ${month[
    monthIndex
  ].toLowerCase()} ${year}</td></tr>`;
  return resultString;
});
console.log(newArrayM);
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
