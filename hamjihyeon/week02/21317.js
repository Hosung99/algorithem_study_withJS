const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function steppingStone() {
  const n = parseInt(input[0]);
  const stones = [];
  const k = parseInt(input[n]);
  
  for (let i = 1; i < n; i++) {
      stones.push(input[i].split(' ').map(Number));
  }

  const dp = Array.from({ length: n + 1 }, () => [Infinity, Infinity]);
  dp[1][0] = 0;
  if (n > 1) {
      dp[2][0] = stones[0][0];
  }
  if (n > 2) {
      dp[3][0] = Math.min(stones[0][1], stones[0][0] + stones[1][0]);
  }
  
  for (let i = 4; i <= n; i++) {
      dp[i][0] = Math.min(
          dp[i - 1][0] + stones[i - 2][0],
          dp[i - 2][0] + stones[i - 3][1]
      );
      
      if (i >= 4) {
          dp[i][1] = Math.min(
              dp[i - 3][0] + k,
              dp[i - 1][1] + stones[i - 2][0],
              dp[i - 2][1] + stones[i - 3][1]
          );
      }
  }

  return Math.min(dp[n][0], dp[n][1]);
}

console.log(steppingStone());