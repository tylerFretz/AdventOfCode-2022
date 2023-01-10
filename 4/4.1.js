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

const isContained = (rangeA, rangeB) => {
  return rangeA.start >= rangeB.start && rangeA.end <= rangeB.end;
};

const getTotalContained = (ranges) => {
  let totalContained = 0;
  for (let i = 0; i < ranges.length; i++) {
    const rangeA = getStartAndEnd(ranges[i][0]);
    const rangeB = getStartAndEnd(ranges[i][1]);
    if (isContained(rangeA, rangeB) || isContained(rangeB, rangeA)) {
      totalContained++;
    }
  }
  return totalContained;
};

console.log(getTotalContained(input));