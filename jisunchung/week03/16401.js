const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let start = 1;
let end = Math.max(...arr);
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = arr.reduce((acc, curr) => acc + Math.floor(curr / mid), 0);
  if (sum >= M) {
    result = mid;
    start = mid + 1;
  } else end = mid - 1;
}
console.log(result);
