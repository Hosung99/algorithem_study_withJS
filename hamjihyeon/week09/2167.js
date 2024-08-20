const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "hamjihyeon/week09/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let arr = input.slice(1, N + 1).map(line => line.split(" ").map(Number));
let sum = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    sum[i][j] = arr[i - 1][j - 1] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
  }
}

let K = Number(input[N + 1]);
let result = [];

for (let q = N + 2; q < N + 2 + K; q++) {
  let [i, j, x, y] = input[q].split(" ").map(Number);
  let querySum = sum[x][y] - sum[i - 1][y] - sum[x][j - 1] + sum[i - 1][j - 1];
  result.push(querySum);
}

console.log(result.join("\n"));