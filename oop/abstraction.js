// //abstraction

// const NewObj = function (weight, height) {
//   this.weight = weight;
//   this.height = height;
//   let position = {
//     x: 50,
//     y: 100,
//   };

//   let print = function () {
//     console.log(this.weight, this.height);
//   }.bind(this);

//   this.draw = function () {
//     print();
//     console.log(position.x, position.y);
//   };
// };

// const one = new NewObj(10, 20);

// // one.draw();
