// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function filterRange(arr, lower, upper) {
  return arr.filter((n, idx) => n >= lower && n <= upper);
}

console.log(filterRange(num, 4, 8));
