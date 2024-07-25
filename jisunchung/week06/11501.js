const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const T = Number(input[0]);

for (let i = 1; i < 2 * T; i += 2) {
  const N = Number(input[i]);
  const arr = input[i + 1].split(" ").map(Number);
  let max = arr[N - 1];
  let result = 0;

  for (let j = N - 1; j > -1; j--) {
    if (arr[j] > max) max = arr[j];
    else result += max - arr[j];
  }
  console.log(result);
}
