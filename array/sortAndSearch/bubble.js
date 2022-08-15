let arr1 = [13, 12, 15, 0, 22, 55, 33, 66, 13, 23, 55, 54, 14];

// const bubbleSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
// };

// bubbleSort(arr1);
// console.log(arr1);

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

// bubble sort and callback
const bubbleSortCallback = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (cb(array[i], array[j]) > 0) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
};

bubbleSortCallback(arr1, (a, b) => a - b);

// console.log(arr1);

bubbleSortCallback(names, (a, b) => a.id - b.id);
console.log(names);

bubbleSortCallback(names, (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

console.log(names);
