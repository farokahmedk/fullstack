// const name = "Faruk Ahmmed ";

// console.log(name.padStart(20, "b"));
// console.log(name.padEnd(20, "a"));

// console.log(name.repeat(20));

const obj = {
  name: "Faruk",
  print: function () {
    //     setTimeout(
    //       function () {
    //         console.log(this.name);
    //       }.bind(this),
    //       1000
    //     );

    //     const self = this;
    //     setTimeout(function () {
    //       console.log(self.name);
    //     }, 1000);

    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

// obj.print();

//default parameters

function sqr(n = 1) {
  return n * n;
}
//don't use null as argument if you use default parameter
// console.log(sqr());

//custom iterable object implementation

let obj2 = {
  start: 1,
  end: 5,
  [Symbol.iterator]: function () {
    let currentValue = this.start;
    const self = this;
    return {
      next() {
        return {
          done: currentValue > self.end,
          value: currentValue++,
        };
      },
    };
  },
};

// for (let v of obj2) {
//   console.log(v);
// }

let iterate = obj2[Symbol.iterator]();
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

/**
 * Rest and Spread Operator
 */

function sum(...args) {
  return args.reduce((a, b) => a + b);
}

// console.log(sum(10, 20, 30, 40, 50));

const obj3 = {
  a: 10,
  b: 20,
  c: 30,
};

const obj4 = {
  ...obj3,
  c: 100,
};

// console.log(obj4);

//Enhance Object

let a = 10,
  b = 20;

const obj5 = {
  a,
  b,
  print() {
    console.log(this);
  },
};

// obj5.print();

/**
 * Destructuring in JavaScript
 */

const person = {
  name: "Faruk",
  email: "faruk@gmail.com",
  address: {
    city: "Brahmanbaria",
    country: "Bangladesh",
  },
};

const {
  name,
  email,
  address: { city, country },
} = person;

// console.log(name, email, city, country);

const obj6 = {
  a: 10,
  b: 20,
};

const obj7 = Object.entries(obj6); // obj7 is an array of obj6

const obj8 = Object.fromEntries(obj7); // obj8 is an object of obj7
// console.log(obj8);

//Symbols primitive data type

const arr = [1, 2, 3, 4, 5];

function myIterator(arr) {
  let i = 0;
  return {
    next() {
      return {
        done: i >= arr.length,
        value: arr[i++],
      };
    },
  };
}

// let iter = myIterator(arr);
// let iter = arr[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
