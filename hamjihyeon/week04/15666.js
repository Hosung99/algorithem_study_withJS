const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const countN = input[1].split(' ').map(Number).sort((a, b) => a - b);
const result = [];
const output = [];

function dfs(start, depth) {
  if (depth === M) {
    return result.push(output.join(` `));
  }
  for (let i = start; i < N; i++) {
    if (countN[i] !== countN[i + 1]) {
      output.push(countN[i]);
      dfs(i, depth + 1);
      output.pop();
    }
  }
}

function NM() {
  dfs(0, 0);
  return result.join(`\n`);
}
console.log(NM());