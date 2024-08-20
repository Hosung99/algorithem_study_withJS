const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const p_sum = Array(5004).fill(0);
const student = Array(5004).fill(false);

function solution() {
  let ans = "";
  const [N, K, Q, M] = input[0].split(" ").map(Number);
  const sleep = input[1].split(" ").map(Number);
  for (let i = 0; i < K; i++) {
    student[sleep[i]] = true;
  }
  for (let i = 3; i <= N + 2; i++) {
    p_sum[i] = 1;
  }
  const attend = input[2].split(" ").map(Number);
  for (let i = 0; i < Q; i++) {
    if (student[attend[i]] === true) {
      continue;
    }
    for (let j = attend[i]; j <= N + 2; j += attend[i]) {
      if (student[j] === true) {
        continue;
      }
      p_sum[j] = 0;
    }
  }
  for (let i = 4; i <= N + 2; i++) {
    p_sum[i] += p_sum[i - 1];
  }
  for (let i = 0; i < M; i++) {
    const [start, end] = input[i + 3].split(" ").map(Number);
    const cnt = p_sum[end] - p_sum[start - 1];
    ans += cnt + "\n";
  }
  return ans;
}

console.log(solution());
