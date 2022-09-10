//abstraction
//getter setter

const NewObj = function (weight, height) {
  this.weight = weight;
  this.height = height;

  let position = {
    x: 50,
    y: 100,
  };

  let print = function () {
    console.log(this.weight, this.height);
  }.bind(this);

  //   this.getPosition = function () {
  //     return position;
  //   };

  this.draw = function () {
    print();
    console.log(position.x, position.y);
  };

  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
      position = value;
    },
  });
};

const one = new NewObj(10, 20);

one.draw();
one.position = {
  ...one.position,
  x: 200,
};
console.log(one.position);
