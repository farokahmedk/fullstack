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
Square.prototype = Object.create(Shape.prototype);
//reset constructor
Square.prototype.constructor = Square;

Square.prototype.draw = function () {
  console.log("Drawing");
};

const sq1 = new Square(44, "green");
// console.log(sq1);
