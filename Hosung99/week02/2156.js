const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let dp = new Array(10001).fill(0);

function solution() {
  let N = parseInt(input[0]);
  let arr = new Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    arr[i] = parseInt(input[i]);
  }
  dp[1] = arr[1];
  dp[2] = dp[1] + arr[2];
  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(
      dp[i - 3] + arr[i - 1] + arr[i],
      dp[i - 2] + arr[i],
      dp[i - 1]
    );
  }
  return dp[N];
}

console.log(solution());
