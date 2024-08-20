const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = Array.from({ length: 201 }, () => Array(201).fill(0));
const p_sum = Array.from({ length: 201 }, () => Array(201).fill(0));

function solution() {
  let ans = -Infinity;
  const [N, M] = input[0].split(" ").map(Number);
  for (let i = 1; i <= N; i++) {
    input[i] = input[i].split(" ").map(Number);
    for (let j = 1; j <= M; j++) {
      arr[i][j] = input[i][j - 1];
    }
  }
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      p_sum[i][j] =
        p_sum[i - 1][j] + p_sum[i][j - 1] - p_sum[i - 1][j - 1] + arr[i][j];
    }
  }
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      for (let k = 1; k <= i; k++) {
        for (let l = 1; l <= j; l++) {
          let temp =
            p_sum[i][j] -
            p_sum[i][l - 1] -
            p_sum[k - 1][j] +
            p_sum[k - 1][l - 1];
          ans = Math.max(ans, temp);
        }
      }
    }
  }
  return ans;
}

console.log(solution());
