const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = Array.from({ length: 301 }, () => Array(301).fill(0));
const p_sum = Array.from({ length: 301 }, () => Array(301).fill(0));

function solution() {
  let ans = "";
  const [N, M] = input[0].split(" ").map(Number);
  for (let i = 1; i <= N; i++) {
    const row = input[i].split(" ").map(Number);
    Number;
    for (let j = 1; j <= M; j++) {
      arr[i][j] = row[j - 1];
      p_sum[i][j] =
        p_sum[i - 1][j] + p_sum[i][j - 1] - p_sum[i - 1][j - 1] + arr[i][j];
    }
  }
  let K = +input[N + 1];
  for (let idx = N + 2; idx < N + 2 + K; idx++) {
    const [i, j, x, y] = input[idx].split(" ").map(Number);
    let sum =
      p_sum[x][y] - p_sum[i - 1][y] - p_sum[x][j - 1] + p_sum[i - 1][j - 1];
    ans += sum.toString() + "\n";
  }
  return ans;
}

console.log(solution());
