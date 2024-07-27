const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let oil = new Array(1001).fill(0);
let city = new Array(1001).fill(0);

function solution() {
  let ans = 0n;
  let mx = 1000000001n;
  const N = +input[0];
  input[1] = input[1].split(" ").map(Number);
  input[2] = input[2].split(" ").map(Number);
  for (let i = 0; i < N - 1; i++) {
    oil[i] = input[1][i];
  }
  for (let i = 0; i < N; i++) {
    city[i] = input[2][i];
  }
  for (let i = 0; i < N - 1; i++) {
    if (city[i] < mx) {
      mx = city[i];
    }
    ans += BigInt(mx) * BigInt(oil[i]);
  }
  return ans.toString();
}

console.log(solution());
