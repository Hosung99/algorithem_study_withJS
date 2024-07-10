const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(/\n/);

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = [];
let answer = new Set();

function dfs(depth) {
  if (depth === M) {
    answer.add(result.join(" "));
    return;
  }
  for (let i = 0; i < N; i++) {
    if (depth > 0 && result[depth - 1] > arr[i]) continue;
    result.push(arr[i]);
    dfs(depth + 1);
    result.pop();
  }
}
dfs(0);
console.log([...answer].join("\n"));
