const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const dic = new Map();

for (let tree of input) {
  dic.get(tree) ? dic.set(tree, dic.get(tree) + 1) : dic.set(tree, 1);
}

let total = input.length;
let result = [];

for (let value of dic) {
  result.push(value[0] + " " + ((value[1] / total) * 100).toFixed(4));
}
result.sort();
console.log(result.join("\n"));
