const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .trim()
  .split(/\r?\n/);

const chuckArray = (arr, size) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

const getPriority = (char) => {
  const utfCode = char.charCodeAt(0);
  const offset = utfCode >= 97 ? 96 : 38;
  return utfCode - offset;
};

const sortRucksacks = (groups) => {
  const sortedGroups = [];
  for (const group of groups) {
    const sortedRucksacks = [];
    for (const rucksack of group) {
      const sorted = rucksack.split("").sort().join("");
      sortedRucksacks.push(sorted);
    }
    sortedGroups.push(sortedRucksacks);
  }
  return sortedGroups;    
};

const findCommon = (group) => {
  const [elfOne, elfTwo, elfThree] = group;
  for (const char of elfOne) {
    if (elfTwo.includes(char) && elfThree.includes(char)) {
      return char;
    }
  }
}

const getTotal = (groups) => {
  let total = 0;
  for (const group of groups) {
    const common = findCommon(group);
    const priority = getPriority(common);
    total += priority;
  }
  return total;
};

const groups = chuckArray(input, 3);
const sortedGroups = sortRucksacks(groups);
const total = getTotal(sortedGroups);
console.log(total);