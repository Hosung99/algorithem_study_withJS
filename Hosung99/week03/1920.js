const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = parseInt(input[0]);
let arr_N = input[1].split(" ").map((el) => parseInt(el));
arr_N.sort((a, b) => a - b);

function binary_search(el) {
  let start = 0;
  let end = N;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr_N[mid] === el) return true;
    else if (arr_N[mid] < el) start = mid + 1;
    else end = mid - 1;
  }
  return false;
}

function solution() {
  let ans = "";
  let arr_M = input[3].split(" ").map((el) => parseInt(el));
  arr_M.forEach((el) => {
    if (binary_search(el)) ans += "1\n";
    else ans += "0\n";
  });
  return ans;
}

console.log(solution());
