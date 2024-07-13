const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function solution() {
  let [N, M] = [+input[0], +input[1]];
  let visited = new Array(9).fill(false);
  let arr = [];
  let ans = "";
  function dfs(depth) {
    if (depth === M) {
      ans += arr.join(" ") + "\n";
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (visited[i] === false) {
        arr.push(i);
        visited[i] = true;
        dfs(depth + 1);
        arr.pop();
        visited[i] = false;
      }
    }
  }
  dfs(0);
  return ans;
}

console.log(solution());
