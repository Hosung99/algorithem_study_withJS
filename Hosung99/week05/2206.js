const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let N,
  M,
  queue = [];
let arr = Array.from({ length: 1001 }, () => Array(1001).fill(-1));
let visited = Array.from({ length: 1001 }, () =>
  Array.from({ length: 1001 }, () => Array(2).fill(0))
);
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function setInput() {
  input[0] = input[0].split(" ").map(Number);
  N = input[0][0];
  M = input[0][1];
  input.shift();
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      arr[i][j] = +input[i - 1][j - 1];
    }
  }
}

function validatePoint(Y, X) {
  if (Y <= 0 || X <= 0 || Y > N || X > M) {
    return false;
  }
  return true;
}
function bfs(Y, X) {
  visited[Y][X][1] = 1;
  let head = 0;
  queue.push({ y: Y, x: X, flag: 1 });

  while (head < queue.length) {
    const curr = queue[head++];
    if (curr.y === N && curr.x === M) {
      return visited[curr.y][curr.x][curr.flag];
    }
    for (let dir = 0; dir < 4; dir++) {
      const curX = curr.x + dx[dir];
      const curY = curr.y + dy[dir];
      if (validatePoint(curY, curX)) {
        if (arr[curY][curX] === 1 && curr.flag === 1) {
          if (visited[curY][curX][0] === 0) {
            queue.push({ y: curY, x: curX, flag: 0 });
            visited[curY][curX][0] = visited[curr.y][curr.x][1] + 1;
          }
        } else if (
          arr[curY][curX] === 0 &&
          visited[curY][curX][curr.flag] === 0
        ) {
          queue.push({ y: curY, x: curX, flag: curr.flag });
          visited[curY][curX][curr.flag] =
            visited[curr.y][curr.x][curr.flag] + 1;
        }
      }
    }
  }
  return -1;
}

function solution() {
  let ans;
  setInput();
  ans = bfs(1, 1);
  return ans;
}

console.log(solution());
