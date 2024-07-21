const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
const board = input.map((val) => val.split(" ").map(Number));
const area = Array.from(Array(N), () => new Array(N).fill(0));
let max = 0;
let maxResult = 0;

function bfs(row, col) {
  const q = [];
  let front = 0; //shift() 대신 사용
  q.push([row, col]);
  area[row][col] = 0;

  while (front < q.length) {
    const [a, b] = q[front++];
    for (let [dirR, dirC] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      const nextR = a + dirR;
      const nextC = b + dirC;
      if (
        nextR >= 0 &&
        nextR < N &&
        nextC >= 0 &&
        nextC < N &&
        area[nextR][nextC] === 1
      ) {
        area[nextR][nextC] = 0;
        q.push([nextR, nextC]);
      }
    }
  }
}

for (let col of board) {
  max = Math.max(max, ...col);
}

for (let height = 0; height <= max; height++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      area[i][j] = board[i][j] > height ? 1 : 0;
    }
  }

  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (area[i][j] === 1) {
        bfs(i, j);
        count++;
      }
    }
  }
  maxResult = Math.max(maxResult, count);
}

console.log(maxResult);
