const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

function solution() {
  let N = parseInt(input[0]);
  let K = parseInt(input[N]);
  let dp = Array.from(Array(N + 1), () => Array(2).fill(99999999));
  let v = [];

  for (let i = 1; i < N; i++) {
    let [v1, v2] = input[i].split(" ").map(Number);
    v[i] = [v1, v2];
  }

  dp[1][0] = 0;
  if (N > 1) {
    dp[2][0] = v[1][0];
  }
  if (N > 2) {
    dp[3][0] = Math.min(v[1][0] + v[2][0], v[1][1]);
  }

  for (let i = 4; i <= N; i++) {
    dp[i][0] = Math.min(dp[i - 1][0] + v[i - 1][0], dp[i - 2][0] + v[i - 2][1]);
    dp[i][1] = Math.min(
      Math.min(dp[i - 1][1] + v[i - 1][0], dp[i - 2][1] + v[i - 2][1]),
      dp[i - 3][0] + K
    );
  }

  return Math.min(dp[N][0], dp[N][1]);
}

console.log(solution());
