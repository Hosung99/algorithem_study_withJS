const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const level = [0].concat(input.shift().split(" ").map(Number));
const Q = Number(input.shift());
const queries = input.map((val) => val.split(" ").map(Number));

const prefixSum = new Array(N + 1).fill(0);
let sum = 0;

for (let i = 1; i < N; i++) {
  if (level[i] > level[i + 1]) {
    sum++;
  }
  prefixSum[i + 1] = sum;
}

let result = [];
for (const [x, y] of queries) {
  result.push(prefixSum[y] - prefixSum[x]);
}

console.log(result.join("\n"));
