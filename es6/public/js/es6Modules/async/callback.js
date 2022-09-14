let arr = [1, 2, 3, 4, 5];

// let sqr = arr.map((v) => v * v);

// console.log(sqr);

function asyncMap(arr, callback) {
  return arr.map((v) => {
    //     setTimeout(callback.bind(null, v), 0);
    setTimeout(() => callback(v), 0);
  });
}

let newArr = asyncMap(arr, (v) => {
  //   console.log(v);
});

// console.log(newArr);
