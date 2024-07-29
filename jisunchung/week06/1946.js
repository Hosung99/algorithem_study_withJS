const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let T = Number(input[0]);
let start = 1;

while (T--) {
  const N = Number(input[start]);
  let arr = [];
  let result = 0;

  for (let j = start + 1; j <= start + N; j++) {
    arr.push(input[j].split(" ").map(Number));
  }
  arr.sort((a, b) => a[0] - b[0]);
  let min = arr.shift()[1]; //서류 1등은 무조건 뽑음
  result++;
  for (let [_, b] of arr) {
    if (b < min) {
      min = b;
      result++;
    }
  }
  console.log(result);
  start += N + 1;
}
