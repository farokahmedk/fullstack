const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (let i = 0; i < 100; i++) {
  var words = alphabet[Math.floor(Math.random() * alphabet.length)];

  const temp = {
    name: `${words.toUpperCase()}${
      alphabet[Math.floor(Math.random() * alphabet.length)]
    }${alphabet[Math.floor(Math.random() * alphabet.length)]}${
      alphabet[Math.floor(Math.random() * alphabet.length)]
    }${alphabet[Math.floor(Math.random() * alphabet.length)]}`,
    phone: `1-${Math.floor(Math.random() * (999 - 100) + 100)}-${Math.floor(
      Math.random() * (999 - 100) + 100
    )}-${Math.floor(Math.random() * (9999 - 1000) + 1000)}`,
  };
  console.log(temp);
}
