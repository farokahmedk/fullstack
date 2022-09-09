const arr = ["a", "b", "c", "d", "e", "f"];

const iArray = arr[Symbol.iterator]();
// console.log(iArray.next());
// console.log(iArray.next());
// console.log(iArray.next());
// console.log(iArray.next());
// console.log(iArray.next());
// console.log(iArray.next());
// console.log(iArray.next());

const iKeys = arr.keys();
// console.log(iKeys.next());
// console.log(iKeys.next());
// console.log(iKeys.next());
// console.log(iKeys.next());
// console.log(iKeys.next());

const values = arr.values();
// console.log(values.next());
// console.log(values.next());
// console.log(values.next());
// console.log(values.next());
// console.log(values.next());

const entries = arr.entries();
// console.log(entries.next());
// console.log(entries.next());
// console.log(entries.next());
// console.log(entries.next());

const loop = (it, name) => {
  for (let v of it) {
    console.log(`${name} =>  ${v}`);
  }
};

// loop(arr, "Array");
// loop(iKeys, "Keys");
// loop(values, "Values");
// loop(entries, "Entries");

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i]);
// }

const arr1 = arr.reduce((pre, curr) => {
  pre.push(curr);
  return pre;
}, []);

// console.log(arr1);

// arr1[0] = 100;

// console.log(arr1);

// console.log(arr);

const arr2 = arr.map((v) => v);
// console.log(arr2, "arr2");
const arr3 = arr.filter((v) => v);
// console.log(arr3, "arr3");
const arr4 = arr.slice();
// console.log(arr4, "arr4");
const arr5 = arr.concat();
console.log(arr5, "arr5");
