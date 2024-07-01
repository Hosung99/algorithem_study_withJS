const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function wineTasting() {
  const glass = parseInt(input[0]);
  const wine = input.slice(1).map(Number);

  const dp = Array(glass).fill(0);

  dp[0] = wine[0];
  dp[1] = wine[0] + wine[1];
  dp[2] = Math.max(wine[2] + wine[1], wine[2] + wine[0], dp[1]);

  for (let i = 3; i < glass; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + wine[i], dp[i - 3] + wine[i - 1] + wine[i]);
  }
  return dp[glass - 1];
}

console.log(wineTasting());
