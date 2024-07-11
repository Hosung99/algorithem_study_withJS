const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const input = fs.readFileSync("hamjihyeon/week04/test.txt").toString().trim().split('\n');

const size = parseInt(input[0]);
const chess = [];
const rightDown = new Array(2 * size).fill(false);
const leftDown = new Array(2 * size).fill(false);
let maxBishops = 0;

function dfs(row, col, cnt, color) {
  if (col >= size) {
    row++;
    col = (col % 2 === 0) ? 1 : 0;
  }
  if (row >= size) {
    maxBishops = Math.max(maxBishops, cnt);
    return;
  }

  if (chess[row][col] === 1 && !rightDown[row + col] && !leftDown[row - col + size]) {
    rightDown[row + col] = true;
    leftDown[row - col + size] = true;
    dfs(row, col + 2, cnt + 1, color);
    rightDown[row + col] = false;
    leftDown[row - col + size] = false;
  }
  dfs(row, col + 2, cnt, color);
}

function bishop() {
  for (let i = 1; i <= size; i++) {
    chess.push(input[i].split(' ').map(Number));
  }
  maxBishops = 0;
  dfs(0, 0, 0, "white");
  const whiteBishop = maxBishops;

  maxBishops = 0;
  dfs(0, 1, 0, "black");
  const blackBishop = maxBishops;

  return whiteBishop + blackBishop;
}
console.log(bishop());