const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .trim()
  .split(/\r?\n/)
  .map((line) => line.split(" "));

const getPointsForRound = (opp, outcome) => {
  // draw
  if (outcome === "Y") {
    if (opp === "A") return 4;
    if (opp === "B") return 5;
    if (opp === "C") return 6;
  }

  // loss
  if (outcome === "X") {
    if (opp === "A") return 3;
    if (opp === "B") return 1;
    if (opp === "C") return 2;
  }

  // win
  if (outcome === "Z") {
    if (opp === "A") return 8;
    if (opp === "B") return 9;
    if (opp === "C") return 7;
  }
};


let total = 0;
for (const line of input) {
  const [opp, outcome] = line;
  total += getPointsForRound(opp, outcome);
}

console.log(total);
