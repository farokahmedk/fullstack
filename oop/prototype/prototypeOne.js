function Shape() {}

Shape.prototype.common = function () {
  console.log("Common");
};

function Square(width) {
  this.width = width;
}
Square.prototype = Object.create(Shape.prototype);
//reset constructor
Square.prototype.constructor = Square;

Square.prototype.draw = function () {
  console.log("Drawing");
};

const sq1 = new Square(44);
