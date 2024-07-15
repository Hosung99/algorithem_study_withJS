const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = Array.from(Array(11), () => Array(11).fill(0));
let l_d = new Array(11).fill(0);
let r_d = new Array(11).fill(0);

function solution() {
  let N = +input[0];
  let ans = [0, 0];
  let ans_idx = 0;
  for (let i = 0; i < N; i++) {
    input[i + 1] = input[i + 1].split(" ").map(Number);
    for (let j = 0; j < N; j++) {
      arr[i][j] = input[i + 1][j];
    }
  }
  function dfs(row, col, cnt) {
    if (col >= N) {
      row++;
      if (col % 2 === 0) {
        col = 1;
      } else {
        col = 0;
      }
    }
    if (row === N) {
      ans[ans_idx] = Math.max(ans[ans_idx], cnt);
      return;
    }
    if (arr[row][col] && !l_d[col - row + N - 1] && !r_d[col + row]) {
      l_d[col - row + N - 1] = true;
      r_d[col + row] = true;
      dfs(row, col + 2, cnt + 1);
      l_d[col - row + N - 1] = false;
      r_d[col + row] = false;
    }
    dfs(row, col + 2, cnt);
  }
  dfs(0, 0, 0);
  ans_idx++;
  dfs(0, 1, 0);
  return ans[0] + ans[1];
}

console.log(solution());
