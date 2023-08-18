// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน
const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

const resultG = persons.reduce((acc, item) => {
  if (!acc[item.sex]) acc[item.sex] = [];
  acc[item.sex].push(item.name);
  return acc;
}, {});

console.log(resultG);

// const newObj = products.reduce((acc, item) => {
//   acc[item.id] = { name: item.name };
//   return acc;
// }, {});

// const result = alphabets.reduce((acc, char) => {
//   let found = false;
//   for (let c of acc) {
//     if (c == char) found = true;
//   }
//   if (!found) acc.push(char);
//   return acc;
// }, []);

// console.log(result);
