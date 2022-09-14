let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "One");
});

p1.then((res) => {
  console.log(res);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "two");
});

p2.then((res) => {
  console.log(res);
});
