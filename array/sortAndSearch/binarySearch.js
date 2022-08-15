const numbers = [1, 12, 4, 5, 6, 8, 2, 3, 9, 10, 7, 11, 13];
const names = [
  { id: "05", name: "Ant" },
  { id: "01", name: "Apple" },
  { id: "03", name: "Bat" },
  { id: "04", name: "Cat" },
  { id: "08", name: "Cup" },
  { id: "02", name: "Dog" },
  { id: "10", name: "Mango" },
  { id: "01", name: "Onion" },
  { id: "06", name: "doll" },
  { id: "09", name: "orange" },
];
const namesID = [
  { id: "01", name: "Apple" },
  { id: "02", name: "Onion" },
  { id: "03", name: "Dog" },
  { id: "04", name: "Bat" },
  { id: "05", name: "Ant" },
  { id: "06", name: "doll" },
  { id: "07", name: "doll" },
  { id: "08", name: "Cup" },
  { id: "09", name: "orange" },
  { id: "10", name: "Mango" },
];

const binarySearch = (arr, key) => {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  while (firstIndex <= lastIndex) {
    let mid = Math.floor((firstIndex + lastIndex) / 2);
    console.log(mid);
    if (arr[mid] === key) return mid;
    if (arr[mid] < key) firstIndex = mid + 1;
    if (arr[mid] > key) lastIndex = mid - 1;
  }
  return -1;
};

// numbers.sort((a, b) => a - b);

// console.log(numbers);

// const searchOne = binarySearch(numbers, 10);
// console.log(searchOne);

const binarySearchCB = (arr, cb, key) => {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  while (firstIndex <= lastIndex) {
    let mid = Math.floor((firstIndex + lastIndex) / 2);
    if (cb(arr[mid]) === key) return mid;
    if (cb(arr[mid]) < key) firstIndex = mid + 1;
    if (cb(arr[mid]) > key) lastIndex = mid - 1;
  }
  return -1;
};

const n1 = binarySearchCB(
  namesID,
  (value) => {
    return value.id;
  },
  "08"
);

console.log(n1);
