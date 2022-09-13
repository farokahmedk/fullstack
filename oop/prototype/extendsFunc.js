function extend(parent, child) {
  child.prototype = Object.create(parent.prototype);
  //reset constructor
  child.prototype.constructor = child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.common = function () {
  console.log("Common");
};

function Square(width, color) {
  Shape.call(this, color); //super call #131
  this.width = width;
}

extend(Shape, Square);
// Square.prototype = Object.create(Shape.prototype);
//reset constructor
// Square.prototype.constructor = Square;

Square.prototype.draw = function () {
  console.log("Drawing");
};

const sq2 = new Square(44, "green");

function Circle(radius, color) {
  this.radius = radius;
  Shape.call(this, color);
}

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
extend(Shape, Circle);

const cir1 = new Circle(50, "red");

// console.log(cir1);
