const Rect = function (weight, height) {
  this.weight = weight;
  this.height = height;

  let position = {
    x: 50,
    y: 60,
  };
  this.draw = function () {
    print();
  };

  const print = function () {
    console.log(this.weight, this.height);
  }.bind(this);

  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
      position = value;
    },
  });
};

const rect1 = new Rect(50, 60);

const newOne = {
  z: 100,
};

rect1.position = {
  ...rect1.position,
  z: 100,
};

function Square(width) {
  //instance members
  this.width = width;
  this.getWidth = function () {
    //     this.draw();
    console.log(this.width);
  };
}

//prototype members
Square.prototype = {
  draw: function () {
    this.getWidth();
    console.log("Draw");
  },
  //toString method overrides
  toString: function () {
    return "width: " + this.width;
  },
};

const sqr1 = new Square(10);
// console.log(sqr1.toString());
// console.log(sqr1.draw());
// console.log(sqr1.getWidth());
const sqr2 = new Square(50);
// console.log(sqr2.toString());
