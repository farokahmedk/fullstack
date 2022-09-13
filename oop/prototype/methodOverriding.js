function Shape(color) {
  this.color = color;
}

Shape.prototype.common = function () {
  console.log("Common");
};

function Square(width, color) {
  Shape.call(this, color);
  this.width = width;
}

extend(Shape, Square);

Square.prototype.draw = function () {
  console.log("Drawing");
};

const sq3 = new Square(44, "green");

function Circle(radius, color) {
  this.radius = radius;
  Shape.call(this, color);
}

extend(Shape, Circle);
//I have to override method after extend

Circle.prototype.common = function () {
  console.log("Common is override");
};

const cir2 = new Circle(50, "red");
// cir2.common();
// sq3.common();
