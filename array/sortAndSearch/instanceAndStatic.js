const arr = [];
// arr.concat(); //Instance Method
// Array.from(); // Static Method

/**
 * @ Static Method
 */

const s = Array.from("Something");
// console.log(s);

const set = new Set(["amr", "sonar", "bangla", "amr"]);
// console.log(set);
const s1 = Array.from(set);

// console.log(s1);

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);

const s2 = Array.from(mapper.values());
// console.log(s2);

const s3 = Array.from(mapper.keys());
// console.log(s3);

function f() {
  return Array.from(arguments);
}

const s4 = f(2, 4, 6);
// console.log(s4);

const s5 = Array.from(s4, (x) => x + x);
// console.log(s5);

const s6 = Array.from({ length: 4 }, (v, i) => (v = i + 1));
// console.log(s6);

const range = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (v, i) => (v = start + i * step)
  );

const s7 = range(0, 4, 1);
// console.log(s7);

const s8 = range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((value) =>
  String.fromCharCode(value)
);
// console.log(s8);

//All following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c"));
Array.isArray(new Array(1));
Array.isArray(Array.prototype);

//All following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(1);
Array.isArray("string");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(1));
Array.isArray({ __proto__: Array.prototype });

// array of method

Array.of(7); // [7]
Array(7); // here length of the array is 7
Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
Array.of(undefined); // [undefined]

/**
 * @title: Array Join Method
 */

const a = ["Amar", "Sonar", "Bangla"];
console.log(a.join());
console.log(a.join(", "));
console.log(a.join(" + "));
console.log(a.join(""));
