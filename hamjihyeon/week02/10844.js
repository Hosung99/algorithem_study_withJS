const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function countStair() {
  const mod = 1000000000;
  const stair = parseInt(input[0]);
  let dp = Array(stair + 1).fill(0).map(() => Array(10).fill(0));
  
  for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1;
  }

  for (let i = 2; i <= stair; i++) {
    for (let j = 0; j <= 9; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][1] % mod;
      } else if (j === 9) {
        dp[i][j] = dp[i - 1][8] % mod;
      } else {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % mod;
      }
    }
  }
  let result = 0;
  for (let i = 0; i <= 9; i++ ){
    result += dp[stair][i];
  }
  return result % mod;
}

console.log(countStair());