let num = "";
let isEmpty;
let isNan;
let notZero;
let suma = 0;
sum = 0;
count = 0;
avg = 0;
const array = [];

do {
  num = prompt("Enter your Number") || "";
  isEmpty = num.trim() === "";
  isNan = isNaN(num);
  notZero = Number(num) < 1;
  if (!(isEmpty || isNan || notZero)) {
    array.push(Number(num));
  }
} while (!(isEmpty || isNan || notZero));

console.log(array);

array.forEach((a) => (suma += a));

console.log(suma);
