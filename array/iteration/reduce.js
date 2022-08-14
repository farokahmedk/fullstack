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

// console.log(result2);

//reduce right
const number2 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
];

const result3 = number2.reduceRight((acc, curr) => {
  return acc.concat(curr);
}, []);

// console.log(result3);
const number3 = number2.flatMap((value) => value);

// console.log(number3);

const sum2 = result3.reduceRight((acc, curr) => {
  return acc + curr;
}, 0);

// console.log(sum2);

//reduce array into single object

let products = [
  { name: "Javascript", price: 350 },
  { name: "Python", price: 400 },
  { name: "Java", price: 500 },
  { name: "Python", price: 400 },
  { name: "Javascript", price: 400 },
  { name: "Javascript", price: 400 },
];
let total = 0;
const invoice = products.reduce((acc, curr) => {
  if (acc[curr.name]) {
    acc[curr.name].quantity++;
    acc[curr.name].price += curr.price;
    total += curr.price;
  } else {
    total += curr.price;
    acc[curr.name] = {
      price: curr.price,
      quantity: 1,
    };
  }
  return acc;
}, {});

// console.log(invoice);
// console.log(total);

//Matrix Sum

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrixHSum = matrix.map((value) => {
  return value.reduce((a, b) => a + b);
});

// console.log(matrixHSum);

const matrixVSum = matrix.reduce((acc, curr) => {
  return acc.map((v, i) => v + curr[i]);
});

// console.log(matrixVSum);

const matrixSum = matrix.reduce((acc, curr) => {
  return acc + curr.reduce((a, b) => a + b);
}, 0);

// console.log(matrixSum);

//mapped using reduce method

const numbers3 = [1, 2, 3, 4, 5];
const numbers4 = numbers3.reduce((acc, curr) => {
  acc.push(curr);
  return acc;
}, []);

// console.log(numbers4);

const numbers5 = numbers3.reduce((acc, curr, i) => {
  if (curr < 3) {
    acc.push(curr);
  }
  return acc;
}, []);

// console.log(numbers5);

//big array

// const big = new Array(50000000);

// for (let i = 0; i < 50000000; i++) {
//   big.push(i + 1);
// }
// console.time("both");
// const big2 = big.filter((v) => v % 2 === 0).map((v) => v * 2);
// console.timeEnd("both");

//using reduce method

// console.time("reduce");

// const big3 = big.reduce((acc, curr) => {
//   if (curr % 2 === 0) {
//     acc.push(curr * 2);
//   }
//   return acc;
// }, []);

// console.timeEnd("reduce");

//compose function
//example of compose function

const adds10 = (n) => n + 10;
const times3 = (n) => n * 3;
const div2 = (n) => n / 2;

const r = div2(times3(adds10(10)));
console.log(r);

const compose = (...fns) => {
  return (x) => {
    return fns.reduce((v, f) => f(v), x);
  };
};

const r1 = compose(adds10, times3, div2)(10);
console.log(r1);
