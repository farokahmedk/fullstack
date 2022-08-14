const numbers = [10, 2, 3, 4, 5];

//Implementing sum

function cb(accumulator, currentValue, index) {
  // console.log(`index - ${index}, acc - ${accumulator}, curr - ${currentValue}`);
  return accumulator + currentValue;
}
const sum = numbers.reduce(cb);

// console.log(sum);

const avg = numbers.reduce((accumulator, currentValue, index, arr) => {
  accumulator += currentValue;
  if (index === arr.length - 1) {
    return accumulator / arr.length;
  }
  return accumulator;
});

// console.log(avg);

//Array flat method
const nestedArray = [[1, 2], 3, [4, 5], [6]];
//[1,2,3,4,5]

const flatArray = nestedArray.flat();

// console.log(flatArray);

const flatArray2 = nestedArray.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

// console.log(flatArray2);

//flatMap = map -> flat

// console.log(flatArray);

// const newArr1 = flatArray
//   .map((value) => {
//     return [value * 3];
//   })
//   .flat();

const newArr1 = flatArray.flatMap((value) => [value * 3]);

// console.log(newArr1);

//using reduce method

const newArr2 = flatArray.reduce((acc, value) => {
  return acc.concat([value, value * 3]);
}, []);

// console.log(newArr2);

//reduce in object. Example Frequency checker

const votes = [
  "Java",
  "Java",
  "Python",
  "Java",
  "PHP",
  "Java",
  "Python",
  "Java",
  "JavaScript",
];

// const result = votes.reduce((acc, curr) => {
//   if (acc[curr]) {
//     acc[curr]++;
//   } else {
//     acc[curr] = 1;
//   }
//   return acc;
// }, {});

// console.log(result);

//implementation of reduce method

function myReduce(arr, cb, init) {
  let acc = init,
    start = 0;
  if (!init) {
    acc = arr[0];
    start = 1;
  }
  for (let i = start; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }

  return acc;
}

const result2 = myReduce(
  votes,
  (acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }

    return acc;
  },
  {}
);

console.log(result2);
