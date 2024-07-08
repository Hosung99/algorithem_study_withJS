const fs = require("fs");
const { parse } = require("path");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = new Array(1001).fill(0);

function solution() {
  let N = parseInt(input[0]);
  let numbers = input[1].split(" ").map(Number);
  for (let i = 1; i <= N; i++) {
    arr[i] = 1;
    for (let j = i - 1; j >= 1; j--) {
      if (numbers[i - 1] > numbers[j - 1] && arr[i] < arr[j] + 1) {
        arr[i] = arr[j] + 1;
      }
    }
  }
  let ans = 0;
  for (let i = 1; i <= N; i++) {
    ans = Math.max(ans, arr[i]);
  }
  return ans;
}

console.log(solution());
