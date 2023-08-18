console.log([1, 2, 3].includes(2)); // *
// ture มี 2 ใน array
console.log([1, 2, 3].includes(4)); // **
// fales ไม่มี 4 ใน array
console.log([1, 2, 3].includes(3, 3)); // ***
// false ตำแหน่งที่ 3 ของ index ไม่มีต้องมูล 3 ใน array อยู่ใน index 2
console.log([1, 2, 3].includes(3, -1)); // ****
// true ตำแหน่งที่ -1 ของ index มีเลข 3 อยู่
console.log([1, 2, NaN].includes(NaN)); // *****
// true มี NaN อยู่ใน array
console.log(["1", "2", "3"].includes(3)); // ******
// false 3 ใน array เป็น String จึงหา 3 ไม่เจอ
