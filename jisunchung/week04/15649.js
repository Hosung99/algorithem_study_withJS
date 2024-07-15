const [N, M] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let visited = new Array(N).fill(false);
let selected = [];
let answer = "";

function dfs(depth) {
  if (depth === M) {
    answer += selected.join(" ") + "\n";
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    selected.push(i + 1);
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}
dfs(0);
console.log(answer);
