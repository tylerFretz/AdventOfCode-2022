const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .trim()
  .split(/\r?\n/)
  .map((line) => line.split(" "));

const getOutcome = (opp, me) => {
  if (
    (opp === "A" && me === "X") ||
    (opp === "B" && me === "Y") ||
    (opp === "C" && me === "Z")
    ) return 3;
  if (
    (opp === "A" && me === "Y") ||
    (opp === "B" && me === "Z") ||
    (opp === "C" && me === "X")
    ) return 6;
  return 0;
};


let total = 0;
for (const line of input) {
  const [opp, me] = line;
  total += getOutcome(opp, me);
  if (me === "X") total += 1;
  if (me === "Y") total += 2;
  if (me === "Z") total += 3;
}

console.log(total);

