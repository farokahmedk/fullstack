const fruits = ["Apple", "Mango", "Orange", "Banana", "apple"];
const numbers = [1, 12, 4, 5, 6, 8, 2, 3, 9, 10, 7, 11, 13];
const names = [
  { id: "01", name: "Apple" },
  { id: "05", name: "Ant" },
  { id: "04", name: "Cat" },
  { id: "10", name: "Mango" },
  { id: "09", name: "orange" },
  { id: "08", name: "Cup" },
  { id: "01", name: "Onion" },
  { id: "02", name: "Dog" },
  { id: "03", name: "Bat" },
  { id: "06", name: "doll" },
];

numbers.sort((a, b) => a - b);
// console.log(numbers);

fruits.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
// console.log( fruits );

names.sort((a, b) => a.id - b.id);

console.log(names);
names.sort((a, b) => {
  // a.name = a.name.toLowerCase();
  // b.name = b.name.toLowerCase();

  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
console.log(names);
