const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "hamjihyeon/week07/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tree = new Map();
let result = 0;

input.forEach(treeName => {
  tree.set(treeName, (tree.get(treeName) || 0) + 1);
  result++;
});

const sortedTreeNames = Array.from(tree.keys()).sort();

sortedTreeNames.forEach(name => {
  const percentage = ((tree.get(name) / result) * 100).toFixed(4);
  console.log(`${name} ${percentage}`);
});