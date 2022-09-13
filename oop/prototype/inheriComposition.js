function mixing(target, ...sources) {
  Object.assign(target, ...sources);
}

const canWalk = {
  walk: function () {
    console.log("Walking...");
  },
};

const canEat = {
  eat: function () {
    console.log("Eating...");
  },
};

const canSwim = {
  swim: function () {
    console.log("Swimming...");
  },
};

// const person = Object.assign({}, canWalk, canEat);
function Person(name) {
  this.name = name;
}
// Object.assign(Person.prototype, canWalk, canEat);
mixing(Person.prototype, canWalk, canEat);
const p1 = new Person("Faruk");
// console.log(p1);

function GoldFish(name) {
  this.name = name;
}

mixing(GoldFish.prototype, canEat, canSwim);
const gl = new GoldFish("Gold Fish");
console.log(gl);
