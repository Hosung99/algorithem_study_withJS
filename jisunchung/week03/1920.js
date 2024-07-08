const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const targets = input[3].split(" ").map(Number);
const result = [];

function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === target) return 1;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return 0;
}

targets.forEach((i) => result.push(binarySearch(A, i, 0, N - 1)));
console.log(result.join("\n"));
