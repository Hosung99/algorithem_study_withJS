const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let N, M, arr;
const stack = [];
const visited = Array.from({ length: 501 }, () => Array(501).fill(false));
let [areaCount, areaSize] = [0, 0];
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function setInput() {
  input[0] = input[0].split(" ").map(Number);
  N = input[0][0];
  M = input[0][1];
  input.shift();
  arr = input.map((ele) => ele.split(" ").map(Number));
}

function validatePoint(curX, curY) {
  if (curX < 0 || curY < 0 || curX >= M || curY >= N) {
    return false;
  }
  if (arr[curY][curX] === 0) {
    return false;
  }
  if (visited[curY][curX] === true) {
    return false;
  }
  return true;
}

function bfs(Y, X) {
  visited[Y][X] = true;
  stack.push({ y: Y, x: X });
  let tempSize = 0;
  while (stack.length) {
    const curr = stack.pop();
    tempSize++;
    for (let dir = 0; dir < 4; dir++) {
      const curX = curr.x + dx[dir];
      const curY = curr.y + dy[dir];
      if (validatePoint(curX, curY)) {
        stack.push({ y: curY, x: curX });
        visited[curY][curX] = true;
      }
    }
  }
  return tempSize;
}

function checkBfs() {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (arr[y][x] === 1 && !visited[y][x]) {
        areaSize = Math.max(areaSize, bfs(y, x));
        areaCount++;
      }
    }
  }
}

function solution() {
  setInput();
  checkBfs();
  return areaCount + "\n" + areaSize;
}

console.log(solution());
