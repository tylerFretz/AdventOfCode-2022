const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .trim()
  .split(/\r?\n/);


let max = 0;
let temp = 0;

for (const line of input) {
  if (!line) {
    max = Math.max(max, temp);
    temp = 0;
    continue;
  }
  const calories = parseInt(line);
  temp += calories;
}

console.log(max);