let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

const initObj = {};

function reducer(acc, name, index, arr) {
  // acc === ('Jack')
  // - ยังไม่เคยมีชื่อใน object => เพิ่มชื่อเป็น Key และ value เป็น 1
  // - มีชื่อใน obj แล้ว => update  value +1
  if (!acc[name]) {
    acc[name] = 1;
  } else {
    acc[name]++;
  }
  return acc;
  //   if (!acc[name]) acc[name] = 0;
  //   acc[name]++;
  //   return acc;
}

const r = names.reduce(reducer, initObj);
console.log(r);
