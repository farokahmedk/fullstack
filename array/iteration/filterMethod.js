const students = [
  {
    id: 1,
    name: "John",
    gpa: 4.0,
    email: "john@example.com",
    due: true,
    dueAmount: 10000,
  },
  {
    id: 2,
    name: "Mary",
    gpa: 3.0,
    email: "mary@example.com",
    due: false,
    dueAmount: 0,
  },
  {
    id: 3,
    name: "Doe",
    gpa: 2.5,
    email: "doe@example.com",
    due: true,
    dueAmount: 11000,
  },
  {
    id: 4,
    name: "Pink",
    gpa: 3.9,
    email: "pink@example.com",
    due: false,
    dueAmount: 0,
  },
];

const arr1 = [
  { id: 5, name: "Kamal", due: true },
  { id: 6, name: "Jamal", due: false },
  { id: 7, name: "Fahad", due: false },
  { id: 8, name: "Shain", due: true },
];

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
const newArr = students.filter((value) => value.due);
const newArr2 = arr2.filter((v) => v < 5);

// console.log( newArr );

function myFilter(arr, cb) {
  const filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      filterArr.push(arr[i]);
    }
  }

  return filterArr;
}

const arr3 = myFilter(students, (value) => {
  return value.due;
});

// console.log( arr3 );

const arr4 = myFilter(arr2, (value) => value < 5);
console.log(arr4);

const arr5 = myFilter(arr1, (value) => value.due);
console.log(arr5);
