const numbers = [1, 12, 4, 5, 6, 8, 2, 3, 9, 10, 7, 11, 13];
const toDos = [
  { name: "project 1", isDone: true },
  { name: "project 2", isDone: true },
  { name: "project 3", isDone: false },
  { name: "project 4", isDone: true },
  { name: "project 5", isDone: false },
  { name: "project 6", isDone: false },
  { name: "project 7", isDone: true },
  { name: "project 8", isDone: true },
  { name: "project 9", isDone: false },
  { name: "project 10", isDone: true },
];

const index1 = numbers.findIndex((value) => value === 10);
console.log(index1);
const index2 = toDos.findIndex((value) => value.name === "project 7");
console.log(index2);

const find1 = toDos.find((item) => item.isDone === false);
const find2 = toDos.find((item) => item.name === "project 8");

console.log(find1);
console.log(find2);
