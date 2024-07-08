const [N, ...input] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

//각 원소는 최소 자기 자신만으로 부분 수열을 이루기 때문에 1로 채움
const dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (input[j] < input[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
