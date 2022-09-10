const rect = {
  weight: 100,
  height: 50,

  draw: function () {
    console.log("Rectangle");
    this.print();
  },
  print: function () {
    console.log("Weight: ", this.weight);
    console.log("height: ", this.height);
  },
};

// rect.draw();

const rect1 = {
  weight: 200,
  height: 200,
  draw: rect.print,
};

// rect1.draw();

//factory pattern

const createRect = function (weight, height) {
  return {
    weight: weight,
    height: height,

    draw: function () {
      console.log("Rectangle");
      this.print();
    },
    print: function () {
      console.log("Weight: ", this.weight);
      console.log("height: ", this.height);
    },
  };
};

const rect2 = new createRect(300, 200);

// rect2.draw();
const rect3 = new createRect(400, 500);

// rect3.draw();

//constructor pattern

const CreateRectCons = function (weight, height) {
  this.weight = weight;
  this.height = height;

  this.draw = function () {
    console.log("Rectangle");
    this.print();
  };

  this.print = function () {
    console.log("Weight: ", this.weight);
    console.log("height: ", this.height);
  };
};

const createRectOne = new CreateRectCons(10, 20);

// createRectOne.draw();

//constructor property

//call, apply, bind

function test(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

// test(); //NaN

// test.call({ a: 20, b: 30 }, 10, 20);
// test.apply({ a: 30, b: 30 }, [40, 20]);
// const t1 = test.bind({ a: 100, b: 200 }, 50, 50);
const t1 = test.bind({ a: 100, b: 200 });

// t1(50, 50);

//pass by value || pass by reference
//call by value || call by reference

let n = 100;
function number(n) {
  n = n + 200;
  //   console.log(n);
}

number(n);
// console.log(n);

const obj = {
  a: 100,
};

function number2(n) {
  n.a = n.a + 500;
  //   console.log(obj);
}

number2(obj);
// console.log(obj);
