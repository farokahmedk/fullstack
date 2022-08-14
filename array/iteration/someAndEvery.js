let students = [
  {
    id: 1,
    name: "john1",
    email: "john1@example.com",
    password: "password",
    due: false,
    status: "active",
  },
  {
    id: 2,
    name: "john2",
    email: "john2@example.com",
    password: "password",
    due: false,
    status: "active",
  },
  {
    id: 3,
    name: "john3",
    email: "john3@example.com",
    password: "password",
    due: false,
    status: "active",
  },
  {
    id: 4,
    name: "john4",
    email: "john4@example.com",
    password: "password",
    due: true,
    status: "active",
  },
];

function myEvery(arr, cb) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
}

function mySome(arr, cb) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result = true;
      break;
    }
  }
  return result;
}
const one = myEvery(students, (value) => value.due);
const two = mySome(students, (value) => value.due);

console.log(one);
console.log(two);
