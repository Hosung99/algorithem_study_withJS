const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((val) => val.split(" ").map(Number));
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function possible(row, col) {
  return row >= 0 && row < n && col >= 0 && col < m;
}

function bfs(row, col) {
  let q = [[row, col]];
  board[row][col] = 0;
  let size = 1;
  while (q.length !== 0) {
    let [curRow, curCol] = q.shift();
    for (let [dirRow, dirCol] of directions) {
      const nextRow = dirRow + curRow;
      const nextCol = dirCol + curCol;
      if (possible(nextRow, nextCol) && board[nextRow][nextCol] === 1) {
        board[nextRow][nextCol] = 0;
        q.push([nextRow, nextCol]);
        size++;
      }
    }
  }
  return size;
}

let count = 0;
let max = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1) {
      max = Math.max(max, bfs(i, j));
      count++;
    }
  }
}
console.log(count);
console.log(max);
