//function expression

const myFunc = function (a, b) {
  return a + b;
};

const result = myFunc(20, 30);
// setTimeout( () => { console.log( result ); }, 5000 );
const result2 = myFunc;
// console.log(result2(10, 20));

const greetings = function (greet, name) {
  function getFirstName() {
    if (name) return name.split(" ")[0];
    else return "There!";
  }

  const msg = greet + " " + getFirstName();
  //   console.log(msg);
};

greetings("Good Morning,", "Faruk Ahmmed");

function add(a, b, cb) {
  const c = a + b;
  const d = a * b;
  const e = cb(c, d);

  return c * d * e;
}

const number = add(2, 3, sum);

function sum(a, b) {
  return a + b;
}
// console.log(number);

function a() {
  b();
  console.log("a");
}
function b() {
  console.log("b");
}
// const n = 100;
// console.log(n);
// a();

//Creation phase
//Execution phase

const aa = 100;
// newPrint(aa); //error
print(10);

const newPrint = print;

newPrint(45);
function print(a) {
  console.log(a);
}

print(aa);
