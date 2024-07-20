const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N,
  arr,
  visited,
  maxHeight,
  stack = [];
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

function setInput() {
  N = +input[0];
  input.shift();
  arr = input.map((ele) => ele.split(" ").map(Number));
}

function checkMaxHeight() {
  let tempHeight = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      tempHeight = Math.max(tempHeight, arr[i][j]);
    }
  }
  return tempHeight;
}

function rainDrop(height) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (arr[j][k] <= height) {
        visited[j][k] = true;
      }
    }
  }
}

function validatePoint(curY, curX) {
  if (curY < 0 || curX < 0 || curX >= N || curY >= N) {
    return false;
  }
  if (visited[curY][curX] === true) {
    return false;
  }
  return true;
}

function bfs(Y, X) {
  stack.push({ y: Y, x: X });
  visited[Y][X] = true;
  while (stack.length) {
    let curr = stack.pop();
    for (let dir = 0; dir < 4; dir++) {
      let curX = curr.x + dx[dir];
      let curY = curr.y + dy[dir];
      if (validatePoint(curY, curX)) {
        stack.push({ y: curY, x: curX });
        visited[curY][curX] = true;
      }
    }
  }
}

function checkBfs(height) {
  let tempArea = 0;
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (arr[j][k] > height && !visited[j][k]) {
        bfs(j, k);
        tempArea++;
      }
    }
  }
  return tempArea;
}

function solution() {
  let ans = 1;
  setInput();
  maxHeight = checkMaxHeight();
  for (let i = 1; i <= maxHeight; i++) {
    visited = Array.from({ length: 101 }, () => Array(N).fill(false));
    rainDrop(i);
    ans = Math.max(ans, checkBfs(i));
  }
  return ans;
}

console.log(solution());
