const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "eleven",
  "eight",
  "nine",
  "ten",
  "twenty",
  "thirty",
  "thirty",
  "a",
];

const group = numbers.reduce((acc, curr) => {
  const len = curr.length;
  if (acc[len]) {
    acc[len].push(curr);
    acc[len][0]++;
  } else {
    acc[len] = [1, curr];
  }
  return acc;
}, {});

// console.log(group);

//combining data from different sources

const courses = [
  { id: "ID01", name: "Course", price: 2000 },
  { id: "ID02", name: "Course", price: 2000 },
  { id: "ID03", name: "Course", price: 2000 },
  { id: "ID04", name: "Course", price: 2000 },
  { id: "ID05", name: "Course", price: 2000 },
  { id: "ID06", name: "Course", price: 2000 },
];

const discounts = {
  ID01: 100,
  ID02: 200,
  ID03: 300,
  ID04: 400,
  ID05: 500,
  ID06: 600,
};

const discountCoursePrice = courses.reduce((acc, cur) => {
  if (discounts[cur.id]) {
    cur.discount = discounts[cur.id];
  } else {
    cur.discount = 0;
  }
  acc.push(cur);
  return acc;
}, []);

console.log(discountCoursePrice);
console.log(courses);
