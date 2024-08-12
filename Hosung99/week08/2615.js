const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const board = Array.from({ length: 19 }, () => Array(19).fill(0));
let visited = Array.from({ length: 19 }, () =>
  Array.from({ length: 19 }, () => Array(4).fill(false))
);
let stack;
let ans_stack;

const dx = [1, 0, 1, 1];
const dy = [0, 1, -1, 1];

function bfs(i, j, dir, value) {
  visited[i][j][dir] = true;
  let cnt = 2;
  ans_stack.push({ i, j });
  stack.push({ x: i, y: j });
  while (stack.length > 0) {
    let curr = stack.pop();
    let curX = curr.x + dx[dir];
    let curY = curr.y + dy[dir];
    if (curX < 0 || curY < 0 || curX >= 19 || curY >= 19) continue;
    if (visited[curX][curY][dir]) continue;
    if (board[curX][curY] === value) {
      visited[curX][curY][dir] = true;
      ans_stack.push({ i: curX, j: curY });
      stack.push({ x: curX, y: curY });
      cnt++;
    }
  }
  return cnt;
}

function solution() {
  for (let i = 0; i < 19; i++) {
    input[i] = input[i].split(" ");
    for (let j = 0; j < 19; j++) {
      board[i][j] = +input[i][j];
    }
  }
  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 19; j++) {
      for (let dir = 0; dir < 4; dir++) {
        let nx = i + dx[dir];
        let ny = j + dy[dir];
        if (nx < 0 || ny < 0 || nx >= 19 || ny >= 19) continue;
        if (
          board[nx][ny] !== 0 &&
          !visited[i][j][dir] &&
          board[i][j] === board[nx][ny]
        ) {
          stack = [];
          ans_stack = [];
          visited[i][j][dir] = true;
          ans_stack.push({ i, j });
          if (bfs(nx, ny, dir, board[i][j]) === 5) {
            ans_stack.sort((a, b) => {
              if (a.j !== b.j) {
                return a.j - b.j;
              }
              return a.i - b.i;
            });
            return `${board[i][j]}\n${ans_stack[0].i + 1} ${
              ans_stack[0].j + 1
            }`;
          }
        }
      }
    }
  }
  return "0";
}

console.log(solution());
