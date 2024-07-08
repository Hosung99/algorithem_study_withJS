const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution() {
  let arr = { left: 0, right: 0 };
  let mx = 20000000001;
  let N = +input[0];
  let inputs = input[1].split(" ").map(Number);
  let start = 0;
  let end = N - 1;
  while (start < end) {
    let sum = inputs[start] + inputs[end];
    if (Math.abs(sum) < mx) {
      mx = Math.abs(sum);
      arr.left = inputs[start];
      arr.right = inputs[end];
    }
    if (sum < 0) start++;
    else end--;
  }
  let ans = arr.left.toString() + " " + arr.right.toString();
  return ans;
}

console.log(solution());
