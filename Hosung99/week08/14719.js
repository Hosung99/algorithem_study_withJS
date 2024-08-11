const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution() {
  let ans = 0;
  const [H, W] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  for (let i = 1; i < W - 1; i++) {
    let left = 0;
    let right = 0;
    for (let j = 0; j < i; j++) {
      left = Math.max(left, arr[j]);
    }
    for (let j = W - 1; j > i; j--) {
      right = Math.max(right, arr[j]);
    }
    ans += Math.max(0, Math.min(left, right) - arr[i]);
  }
  return ans;
}

console.log(solution());
