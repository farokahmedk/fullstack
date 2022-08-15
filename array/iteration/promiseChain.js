/**
 * @title: Promise Chain
 *
 */

function createPromiseChain(id) {
  const randTime = Math.floor(Math.random() * 2000 + 1);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Processing ${id}, time: ${randTime}`);
      resolve(id);
    }, randTime);
  });
}

const ids = [1, 2, 3, 4, 5];
// ids.forEach((v) => {
//   createPromiseChain(v);
// });

const result = ids.reduce((acc, id) => {
  return acc.then(() => {
    return createPromiseChain(id);
  });
}, Promise.resolve());

result.then(() => {
  console.log("Done!!!");
});
