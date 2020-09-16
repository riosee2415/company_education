const fs = require("fs");

console.log(`START!`);

fs.readFile(`./readme2.txt`, (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log(`Frist`, data.toString());
});

fs.readFile(`./readme2.txt`, (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log(`Second`, data.toString());
});

fs.readFile(`./readme2.txt`, (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log(`Thrid`, data.toString());
});

console.log(`END!`);
