const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = new Array(1000001).fill(0);

function solution() {
  let N = parseInt(input[0]);
  arr[2] = 1;
  arr[3] = 1;
  for (let i = 4; i <= 1000000; i++) {
    arr[i] = arr[i - 1] + 1;
    if (i % 2 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 2] + 1);
    }
    if (i % 3 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 3] + 1);
    }
  }
  return arr[N];
}

console.log(solution());
