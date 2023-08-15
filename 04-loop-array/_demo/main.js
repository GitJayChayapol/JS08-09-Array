// const log = console.log;

// log("learn Array");

// const aninmals = ["Spider", "Cat", "Ant"];

// let r = aninmals.push("dog");
// log(aninmals);
// log(r); //4

// //.Unshift การแทรกคิว เป็นการแทรกไปตำแหน่งหน้า ทำให้ทุกตัวใน array ถูกเลื่อนตำแหน่ง
// let s = aninmals.unshift("Snake", "Mountain Bird");
// log(aninmals);
// log(s); //6

// //.Pop ดึง Element ตัวสุดท้ายออกจาก Array
// let t = aninmals.pop();
// log(aninmals);
// log(t); //Dog

// //#### For loop

// for (let i = 0; i < aninmals.length; i++) {
//   console.log(aninmals[i]);
// }

// //for ... in (มอง array เป็น Object ประเภทหนึ่งได้)
// /*
// <key>:<value> => <index>:<value>
// const arr = {
//     0 : "Bird",
//     1 : "cat",
//     2 : "Dog"
// }
// */

// // ไม่ต้องกำหนด i เอง
// for (let index in aninmals) {
//   console.log(index, aninmals[index]);
// }

// // 4C: for ... of
// for (let element of aninmals) {
//   //1st : element = 'Snake'
//   //2nd : element = 'Mountain Bird'
//   //2nd : element = 'Spider'
//   //2nd : element = 'Cat'
//   //2nd : element = 'Elephant'
//   log(element);
// }

// //Aside Topic : Higher Order Function
// function add(x, y) {
//   return x + y;
// }
// log(add(5, 7));

// //Function Expression : FN as a value
// const a = console.log;
// const b = alert;
// // a("Hi");
// // b("Hello");

// // Create Function ที่รับ Parameter (input) เป็น Function

// function addAndShow(x, y, fn1) {
//   let result = x + y;
//   // call showFn
//   fn1(`result is : ${result}`);
//   return result;
// }

// function show(result) {
//   console.log(result);
// }

// addAndShow(5, 10, show);

// //Main Function
// //Main FN : Higher Order function (ฟังก์ชันที่รับฟังก์ชันเป็น parameter)
// //fn1,fn2,fn3 : Callback

// //fn1,fn2,fn3 จะถูกเรียกต่อเมื่อ cook run เท่านั้น
// //fn1,fn2,fn3 จะเรียกทีหลัง : callback
// function cook(fn1, fn2, fn3) {
//   fn1();
//   fn2();
//   fn3();
// }
// function step1() {
//   log("1.Prepare ingradient");
// }
// function step2() {
//   log("2.Cooking");
// }
// function step3() {
//   log("3.Serve");
// }
// //call
// cook(step1, step2, step3);

//4. forEach
const items = ["Football", "Bag", "Dish"];
// Syntax : <array>.forEach(FN)
// High order fn === forEach (รับ input เป็น Function)
// callback : run ตาม จำนวน สมาชิกใน array

const myFunc = function () {
  console.log("Hi");
};

items.forEach(function () {
  console.log("Hi");
});

items.forEach(myFunc);

function iterateFn(a) {
  console.log(a);
}
// items.forEach(iterateFn);

//const item = ['Football','Bag','Dish']
// const iterateFn = (item) => console.log(item);
// or const iterateFn = (element) => console.log(element)
// const iterateFn = (a, b, c) => console.log(a, b, c);
const iterateFn = (items, index, array) => console.log(index, items);

items.forEach(iterateFn);
// 1st loop : ('Football',0,['Football','Bag','Dish']) = console.log('Football')
// 2nd loop : ('Bag',1,['Football','Bag','Dish']) = console.log('Bag')
// 3rd loop : ('Dish',2,['Football','Bag','Dish']) = console.log('Dish')

items.forEach((a, b, c) => {
  // console.log(a)
  // at index ... , element = ....
  console.log(`At index = ${b}, element = ${a}`);
});
