const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison")); // *
// 1 อยู่ใน index 0 1

console.log(beasts.indexOf("bison", 2)); // **
// 4 อยู่ใน index 0 1 2 3 4

console.log(beasts.indexOf("giraffe")); // ***
// -1 ไม่อยู่ใน index
