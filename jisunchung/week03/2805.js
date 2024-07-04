const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);
const arr = input[1].split(" ").map(Number);

let start = 1;
let end = Math.max(...arr);

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let sum = 0;
  arr.forEach((i) => {
    sum += i > mid ? i - mid : 0;
  });
  if (sum < M) end = mid - 1;
  else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
