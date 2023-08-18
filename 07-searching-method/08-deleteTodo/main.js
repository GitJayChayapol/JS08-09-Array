// - จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id
// - execute deleteTask(1)

const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function deleteTask(id) {
  const foundedIndex = tasks.findIndex((obj, index) => obj.id == id);
  if (foundedIndex != -1) {
    tasks.splice([foundedIndex], 1);
  }
  return tasks;
}

console.log(deleteTask(2));
