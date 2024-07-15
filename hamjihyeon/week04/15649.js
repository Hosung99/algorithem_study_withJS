const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let result = [];
let output = [];
let visited = new Array(N).fill(false);

function dfs(cnt) {
  if (cnt === M) {
    return result.push(output.join(' '));
  }
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      output.push(i + 1);
      dfs(cnt + 1);
      output.pop();
      visited[i] = false;
    }
  }
}

function NM() {
  dfs(0);
  return result.join('\n');
}
console.log(NM());