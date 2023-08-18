const array = [9, 17, 23, 5];
const newArray = array.filter((item) => item >= 10);
console.log(newArray);
// ค่าที่มากกว่า 10

const array1 = [1, 2, 3, 4];
const newArray1 = array1.filter((item) => item % 2 != 0);
console.log(newArray1);
// ค่าที่เป็นเลขคี่

const array2 = [1, "1", 2, {}];
const newArray2 = array2.filter((item) => typeof item == "number");
console.log(newArray2);
// ค่าที่ประเภทข้อมูลเป็น Number

const array3 = ["apple", "banana", "orange", "pineapple", "watermeon"];
const newArray3 = array3.filter((item) => item.length >= 6);
console.log(newArray3);
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว

const array4 = [1, -3, 2, 8, -4, 5];
const newArray4 = array4.filter((item) => item >= 0);
console.log(newArray4);
// ค่าที่เป็นเลขบวก

const array5 = [1, 3, 4, 5, 6, 7, 8];
const newArray5 = array5.filter((item) => item % 3 == 0);
console.log(newArray5);
// ค่าที่หาร 3 ลงตัว

const array6 = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];
const newArray6 = array6.filter((item) => item.slice(0, 1) == "E");
console.log(newArray6);
// ค่าที่ขึ้นต้นด้วยตัว E

const array7 = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];
const newArray7 = array7.filter((item) => item == item.toUpperCase());
console.log(newArray7);
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด

const array8 = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];
const newArray8 = array8.filter((item) => item.toLowerCase().includes("buri"));
console.log(newArray8);
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

const array9 = [
  { name: "Ben", age: 14 },
  { name: "Phil", age: 18 },
  { name: "John", age: 32 },
  { name: "Ann", age: 16 },
  { name: "Paul", age: 24 },
];
const newArray9 = array9.filter((item) => item.age >= 18);
console.log(newArray9);
// อายุไม่น้อยกว่า 18

const array10 = [
  { id: 1, name: "Pepsi" },
  { id: 2, name: "Mirinda" },
  { id: 3, name: "Coke" },
  { id: 4, name: "Fanta" },
  { id: 5, name: "Sprite" },
];
const newArray10 = array10.filter((item) => item.id != 4);
console.log(newArray10);
// id ไม่เท่ากับ 4

const array11 = [
  { name: "John", birth: "2001-07-31" },
  { name: "Jack", birth: "1990-06-24" },
  { name: "Jim", birth: "1984-12-13" },
  { name: "Jeff", birth: "1996-02-05" },
  { name: "Joe", birth: "2002-06-13" },
];
const newArray11 = array11.filter((item) => item.birth.slice(5, 7) == "06");
console.log(newArray11);
// เกิดเดือน 6
