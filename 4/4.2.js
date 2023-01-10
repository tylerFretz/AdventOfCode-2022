const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .trim()
  .split(/\r?\n/)
  .map((line) => line.split(","));

const getStartAndEnd = (rangeString) => {
  const range = rangeString.split("-");
  return {
    start: parseInt(range[0]),
    end: parseInt(range[1]),
  };
};

const isOverlapping = (rangeA, rangeB) => {
  return rangeA.start <= rangeB.end && rangeA.end >= rangeB.start;
};

const getTotalOverlapping = (ranges) => {
  let total = 0;
  for (const [rangeA, rangeB] of ranges) {
    const a = getStartAndEnd(rangeA);
    const b = getStartAndEnd(rangeB);
    if (isOverlapping(a, b)) {
      total++;
    }
  }

  return total;
}

const numOverlapping = getTotalOverlapping(input);

console.log(numOverlapping);