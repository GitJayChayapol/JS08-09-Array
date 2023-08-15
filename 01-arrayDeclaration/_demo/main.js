const log = console.log;

log("learn Array");

//############### Array Declaration ##################//
//Array Literal
//Element : สมาชิก
const friends = ["Money", "Non", "Peakpoon", "Fon"];

//Array Constructor
const height = new Array(150, 175, 180);
log(height);

//############## Access,Modify,Add,Delete ################//
//Bracket Notation with Index
log(friends[0]); //Money
log(friends[2]); //Peakpoon
log(friends[-1]); // Undefiend
log(friends[10]); // Undefiend

//#################### Update ########################//
friends[0] = "Gold";
log(friends[0]);
log(friends);
friends[1] = "Miachael";
log(friends[1]);

// ถ้าอัพเดทใน index ที่ไม่มีอยู่ จะเป็นการ add !!!!!
// friends[-1] = "Pavit";
// log(friends);
// log(friends[-1]); //ไม่ควรทำ

//##################### Add ##########################//
log(friends[3]);
friends[4] = "Jay";
log(friends[4]);
log(friends);

//#################### Delete ########################//
//เมื่อลบออกด้วย delete จะเป็นช่องว่างหรือ Undefined
delete friends[2];
log(friends);
log(friends[2]);

// 3. Basic Property and Method of Array

// <arr>.length บอกความยาว เพื่อใช้เพิ่มหรือระบุตำแหน่งใน Array ได้ง่ายขึ้น
log(friends.length);

// friends[5] = "Mix";
friends[friends.length] = "Mix"; // ความยางของ array จะต่อสุดท้ายเสมอ ใช้ Add
log(friends);
log(friends.length);

// for (let i = 0; i <= friends.length - 1; i++) {
//   //= 0,1,2,3,4,5 (length = 6) จึงต้อง -1 เพื่อให้จำนวนเท่า ในกรณีที่ <= ถ้า < ไม่ต้องใส่ -1
//   console.log(friends[i]);
// }

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

//########### Method Create Read Update element #################//

const aninmals = ["Spider", "Cat", "Ant"];

//### Immutable = ไม่เปลี่ยนแปลงค่า (ถ้าจะเปลี่ยนต้องเขียนทับ)
//### Mutable = เปลี่ยนแปลงค่าได้

//Method Push ทำให้ Array Mutale ไหม ? Yes (ยาวขึ้น)
//Method Push Return อะไรกลับมา
let r = aninmals.push("dog");
log(aninmals);
log(r); //4

//.Unshift การแทรกคิว เป็นการแทรกไปตำแหน่งหน้า ทำให้ทุกตัวใน array ถูกเลื่อนตำแหน่ง
let s = aninmals.unshift("Snake", "Mountain Bird");
log(aninmals);
log(s); //6

//.Pop ดึง Element ตัวสุดท้ายออกจาก Array
let t = aninmals.pop();
log(aninmals);
log(t); //Dog
