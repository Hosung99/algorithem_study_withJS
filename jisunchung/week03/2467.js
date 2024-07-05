const [N, ...input] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

let start = 0;
let end = N - 1;
let minAbsSum = Infinity;
let answer = [];

while (start < end) {
  const sum = input[start] + input[end];

  if (Math.abs(sum) < minAbsSum) {
    minAbsSum = Math.abs(sum);
    answer = [input[start], input[end]];
  }

  if (sum === 0) break;
  else if (sum > 0) end--;
  else start++;
}

console.log(answer.join(" "));
