const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .trim()
  .split(/\r?\n/);


const queue = [0, 0, 0];
let temp = 0;

for (const line of input) {
  if (!line) {
    if (temp > queue[2]) {
      queue[2] = temp;
      queue.sort((a, b) => b - a);
    }
    temp = 0;
    continue;
  }
  const calories = parseInt(line);
  temp += calories;
}

const total = queue.reduce((a, b) => a + b, 0);
console.log(total);