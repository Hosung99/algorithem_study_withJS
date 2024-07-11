const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let [N, M] = [+input[0], +input[1]];

let visited = new Array(9).fill(false);
let arr = [];

function dfs(depth) {
  if (depth === M) {
    console.log(arr.join(" "));
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

function solution() {
  dfs(0);
}

solution();
