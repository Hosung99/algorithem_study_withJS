const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K, Q, M] = input.shift().split(" ").map(Number);
const sleepingArr = input.shift().split(" ").map(Number);
const attendArr = input
  .shift()
  .split(" ")
  .map(Number)
  .filter((val) => !sleepingArr.includes(val));
const queries = input.map((val) => val.split(" ").map(Number));
const prefixSum = new Array(N + 3).fill(0);
const students = new Array(N + 3).fill(false);

for (let attendNum of attendArr) {
  for (let i = attendNum; i <= N + 2; i += attendNum) {
    if (!sleepingArr.includes(i)) {
      students[i] = true;
    }
  }
}

for (let i = 3; i <= N + 2; i++) {
  prefixSum[i] = prefixSum[i - 1] + (students[i] ? 0 : 1);
}

let result = [];
for (let [S, E] of queries) {
  result.push(prefixSum[E] - prefixSum[S - 1]);
}
console.log(result.join("\n"));
