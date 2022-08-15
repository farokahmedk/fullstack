const numbers = [1, 12, 4, 5, 6, 8, 2, 3, 9, 10, 7, 11, 13];
const names = [
  { id: "01", name: "Apple" },
  { id: "05", name: "Ant" },
  { id: "04", name: "Cat" },
  { id: "10", name: "Mango" },
  { id: "09", name: "Orange" },
  { id: "08", name: "Cup" },
  { id: "01", name: "Onion" },
  { id: "02", name: "Dog" },
  { id: "03", name: "Bat" },
  { id: "06", name: "Doll" },
];

const linearSearch = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return `Index number ${i}`;
    }
  }
  return -1;
};

const n1 = linearSearch(numbers, 8);
// console.log(n1);

//using callback function

const linearSearchCB = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      return `Index number ${i}`;
    }
  }
  return -1;
};

const n2 = linearSearchCB(numbers, (value) => value === 5);
console.log(n2);

const name1 = linearSearchCB(names, (value) => value.name === "Doll");
console.log(name1);
