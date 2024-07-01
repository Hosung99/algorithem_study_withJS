const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = Array.from(Array(101), () => Array(10).fill(0));

function solution() {
  let N = parseInt(input[0]);
  let result = 0;
  for (let i = 1; i <= 9; i++) {
    arr[1][i] = 1;
  }
  for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= 9; j++) {
      if (j === 0) {
        arr[i][j] = arr[i - 1][1];
      } else if (j === 9) {
        arr[i][j] = arr[i - 1][8];
      } else {
        arr[i][j] = (arr[i - 1][j - 1] + arr[i - 1][j + 1]) % 1000000000;
      }
    }
  }
  for (let i = 0; i <= 9; i++) {
    result += arr[N][i];
  }
  return result % 1000000000;
}

console.log(solution());
