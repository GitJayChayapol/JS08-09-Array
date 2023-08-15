let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");
// what's in fruits?
// ['Apples', 'Pear', 'Orange','Banana]
console.log(fruits.length); // *
// 4 จากเดิม มี 3 element "Apples", "Pear", "Orange" เมื่อ Push จะเป็นการเพิ่มตัวหลังสุด เป็น Banana จึงกลายเป็น 4 element ได้แก่ ['Apples', 'Pear', 'Orange','Banana]
