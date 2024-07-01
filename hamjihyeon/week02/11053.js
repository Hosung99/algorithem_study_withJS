const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function longestSubstring() {
  let size = parseInt(input[0]);
  let arr = input[1].split(' ').map(Number);

  let dp = Array(size).fill(0);

  for (let i = 0; i < size; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);

}
console.log(longestSubstring());