const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = [new Array(M + 1).fill(0)];

for (let i = 1; i <= N; i++) {
  arr.push([0, ...input[i].split(" ").map(Number)]);
}

const prefixSum = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    prefixSum[i][j] =
      arr[i][j] +
      prefixSum[i - 1][j] +
      prefixSum[i][j - 1] -
      prefixSum[i - 1][j - 1];
  }
}

let maxSum = -Infinity;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    for (let x = i; x <= N; x++) {
      for (let y = j; y <= M; y++) {
        let sum =
          prefixSum[x][y] -
          prefixSum[i - 1][y] -
          prefixSum[x][j - 1] +
          prefixSum[i - 1][j - 1];

        maxSum = Math.max(maxSum, sum);
      }
    }
  }
}

console.log(maxSum);
