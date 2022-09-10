const points = {
  x: 10,
  y: 20,
  z: 30,
};
let removedPoint;

for (let key in points) {
  if (key === "x") {
    removedPoint = key;
    break;
  }
}

// delete points[ removedPoint ];
// delete points.y;

const pointsTwo = {
  x: 10,
  y: 20,
  z: 30,
};

const arr = Object.keys(points);
// console.log( Object.values( points ) );
const arr2 = Object.entries(points);

const arr3 = Object.assign({}, points);
arr3.z = 100;
console.log(arr3);
console.log(points);
