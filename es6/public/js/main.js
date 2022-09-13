// "use strict";
/* eslint-disable require-yield */
/* eslint-disable no-unused-vars */
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

const generatorObj = {
  start: 1,
  end: 5,
  [Symbol.iterator]: function* () {
    let currentValue = this.start;
    while (currentValue <= this.end) {
      yield currentValue++;
    }
  },
};

let gen1 = generatorObj[Symbol.iterator]();
// console.log(gen1.next());
// console.log(gen1.next());
// console.log(gen1.next());
// console.log(gen1.next());
// console.log(gen1.next());
// console.log(gen1.next());

const set = new Set([1, 2, 3, 4]);
set.add(5);
set.add(6);
set.add(6); //duplicate date will not be added in the array
set.delete(1);
// console.log(set.has(2));
// console.log(set.keys());
// console.log(set, set.size);

let keyIterate = set.keys();
// console.log(keyIterate.next());
// console.log(set.values());
// console.log(set.keys());

let map = new Map([
  ["a", 10],
  ["b", 20],
  ["c", 30],
]);

map.set("d", 40);
// map.delete("a");

// console.log(map.size);
// console.log(map);
// console.log(map.get("c"));
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// for (let [keys, values] of map) {
//   console.log(keys, values);
// }
// map.set({ name: "Faruk" }, 95);

// map.forEach((v, k) => {
//   console.log(k, v);
// });

/**
 * class in ES6
 */

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.draw = function () {
//   console.log(this);
//   console.log("Drawing...");
// };

// const r1 = new Rectangle(60, 50, 50);

// console.log(r1);

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  another = function () {
    console.log("another function");
  };

  name = "faruk";
  draw() {
    console.log("Drawing...");
  }
}

let rect1 = new Rectangle(60, 50);

// console.log(rect1);

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  print() {
    console.log(this.name, this.email);
  }

  static create(str) {
    let person = JSON.parse(str);
    return new Person(person.name, person.email);
  }
}

const str = '{"name":"John","email":"john@gmail.com"}';
const p1 = Person.create(str);
// console.log(p1);

// p1.print();

function Shape() {
  this.draw = function () {
    console.log(this);
  };
}

const s1 = new Shape();
// console.log(s1);
// s1.draw(); // 'this' refers Shape object
const s2 = s1.draw;

// s2(); // 'this' refers Window object
/**
 * if used ("use strict") in the top of file then 'this' will refers to object
 * on other hand ('use strict') will work automatically in class object
 */

/**
 * hiding private data with Symbol
 */

// const _radius = Symbol();
// const _draw = Symbol();
// class Circle {
//   constructor(radius) {
//     this[_radius] = radius;
//   }

//   [_draw]() {
//     console.log("Drawing Circle");
//   }
// }

// let c1 = new Circle(45);
// c1.draw();
// console.log( c1 );
// console.log(Object.getOwnPropertyNames(c1));
// let key = Object.getOwnPropertySymbols(c1)[0];
// console.log(c1[key]);

/**
 * hiding private data with WeakMap
 */

const _radius = new WeakMap();
const _resize = new WeakMap();

class Circle {
  constructor(radius) {
    this.size = 100;
    _radius.set(this, radius);
    _resize.set(this, () => {
      console.log(this.size);
    });
  }

  get radius() {
    return _radius.get(this);
  }
  set radius(value) {
    _radius.set(this, value);
  }
  draw() {
    console.log("Drawing Circle");
    console.log(_radius.get(this));
    _resize.get(this)();
  }
}

let c2 = new Circle(50);

// console.log(c2);
// c2.draw();
c2.radius = 100;
// console.log(c2.radius);

class ShapeTwo {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log("drawing...");
  }
}

class InheritedShape extends ShapeTwo {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  //method override
  draw() {
    console.log("InheritedShape");
  }
  calculate() {
    return this.width * this.height;
  }
}

const in1 = new InheritedShape("red", 50, 100);
// console.log(in1);
// console.log(in1.calculate());
// in1.draw();
