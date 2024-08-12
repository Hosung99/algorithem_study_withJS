const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const board = Array.from({ length: 50 }, () => Array(50).fill(0));
let house = [];
let chicken = [];
let arr = [];
let ans = Infinity;
let visited = Array(51).fill(false);

function calc() {
  let sum = 0;
  for (let i = 0; i < house.length; i++) {
    let mn = Infinity;
    for (let j = 0; j < arr.length; j++) {
      let temp;
      temp = Math.abs(house[i].i - arr[j].i) + Math.abs(house[i].j - arr[j].j);
      mn = Math.min(mn, temp);
    }
    sum += mn;
  }
  return sum;
}

function dfs(idx, depth) {
  if (depth === M) {
    ans = Math.min(ans, calc());
    return;
  }
  for (let i = idx; i < chicken.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    arr.push(chicken[i]);
    dfs(i, depth + 1);
    arr.pop();
    visited[i] = false;
  }
}

function solution() {
  for (let i = 0; i < N; i++) {
    input[i] = input[i].split(" ").map(Number);
    for (let j = 0; j < N; j++) {
      board[i][j] = input[i][j];
      if (input[i][j] === 1) {
        house.push({ i, j });
      } else if (input[i][j] === 2) {
        chicken.push({ i, j });
      }
    }
  }
  dfs(0, 0);
  return ans;
}

console.log(solution());
