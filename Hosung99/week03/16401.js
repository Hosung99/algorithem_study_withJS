const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [M, N] = input[0].split(" ").map(Number);
let arr_N = input[1].split(" ").map(Number);
arr_N.sort((a, b) => a - b);

function solution() {
  let start = 1;
  let end = arr_N[N - 1];
  let ans = 0;
  while (start <= end) {
    let cnt = 0;
    let mid = Math.floor((start + end) / 2);
    for (let i = 0; i < N; i++) {
      cnt += Math.floor(arr_N[i] / mid);
    }
    cnt = parseInt(cnt);
    if (cnt >= M) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}

console.log(solution());
