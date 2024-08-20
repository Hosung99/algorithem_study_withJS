const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = Array(100001).fill(0);
const p_sum = Array(100001).fill(0);

function solution() {
  let ans = "";
  let cnt = 0;
  const N = +input[0];
  input[1] = input[1].split(" ").map(Number);
  for (let i = 1; i <= N; i++) {
    arr[i] = input[1][i - 1];
  }
  for (let i = 1; i <= N; i++) {
    if (arr[i] > arr[i + 1]) {
      cnt++;
    }
    p_sum[i + 1] = cnt;
  }
  const Q = +input[2];
  for (let i = 3; i < Q + 3; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    ans += p_sum[y] - p_sum[x] + "\n";
  }
  return ans;
}

console.log(solution());
