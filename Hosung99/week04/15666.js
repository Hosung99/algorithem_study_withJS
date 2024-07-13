const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution() {
  input[0] = input[0].split(" ");
  let [N, M] = [+input[0][0], +input[0][1]];
  let visited = new Array(9).fill(false);
  let ans = "";
  let arr = [];
  let seq = input[1].split(" ").sort((a, b) => a - b);
  seq = [...new Set(seq)];
  N = seq.length;
  function dfs(num, depth) {
    if (depth === M) {
      ans += arr.join(" ") + "\n";
      return;
    }
    for (let i = num; i < N; i++) {
      arr.push(seq[i]);
      dfs(i, depth + 1);
      arr.pop();
    }
  }
  dfs(0, 0);
  return ans;
}

console.log(solution());
