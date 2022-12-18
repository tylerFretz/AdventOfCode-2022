const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .trim()
  .split(/\r?\n/)
  .map((line) => [line.slice(0, line.length/2), line.slice(line.length/2)]);


console.log(input);

const getPriority = (char) => {
  const utfCode = char.charCodeAt(0);
  const offset = utfCode >= 97 ? 96 : 38;
  return utfCode - offset;
};

const getRucksackTotal = (rucksack) => {
  const [compartmentOne, compartmentTwo] = rucksack;
  let set = new Set();
  let total = 0;
  for (const char of compartmentOne) {
    if (!set.has(char)) {
      set.add(char);
    }
  }
  for (const char of set.values()) {
    if (compartmentTwo.includes(char)) {
      total += getPriority(char);
    }
  }
  return total;
};

let total = 0;
for (const rucksack of input) {
  total += getRucksackTotal(rucksack);
};

console.log(total);