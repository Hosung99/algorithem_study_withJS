const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const board = input.map((val) => val.split(" ").map(Number));

function isValid(x, y) {
  return x >= 0 && x < 19 && y >= 0 && y < 19;
}

function checkWinner(board, row, col, color) {
  const dir = [
    [0, 1],
    [1, 0],
    [1, 1],
    [-1, 1],
  ]; //→ ↓ ↘ ↗

  for (let [dr, dc] of dir) {
    let count = 1;
    for (let i = 1; i < 5; i++) {
      const nx = row + dr * i;
      const ny = col + dc * i;
      if (isValid(nx, ny) && board[nx][ny] === color) {
        count++;
      } else break;
    }
    //양끝에 같은 색이 있는지 확인
    if (count === 5) {
      const prevX = row - dr;
      const prevY = col - dc;
      const nextX = row + dr * 5;
      const nextY = col + dc * 5;

      if (
        !(isValid(prevX, prevY) && board[prevX][prevY] === color) &&
        !(isValid(nextX, nextY) && board[nextX][nextY] === color)
      ) {
        return true;
      }
    }
  }
  return false;
}

function main() {
  for (let x = 0; x < 19; x++) {
    for (let y = 0; y < 19; y++) {
      if (board[x][y] !== 0) {
        if (checkWinner(board, x, y, board[x][y])) {
          console.log(board[x][y]);
          console.log(`${x + 1} ${y + 1}`);
          return;
        }
      }
    }
  }
  console.log(0);
}

main();
