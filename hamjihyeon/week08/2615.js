const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "hamjihyeon/week08/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const map = input.map((row) => row.split(" ").map(Number));
const directions = [[0,1],[1,0],[1,1],[-1,1]];

function isValid(x, y) {
  return x >= 0 && x < 19 && y >= 0 && y < 19;
}

function checkWinner(x, y, color) {
  for (const [dx, dy] of directions) {
    let count = 1;
    let nx = x + dx;
    let ny = y + dy;

    while (isValid(nx, ny) && map[nx][ny] === color) {
      count++;
      nx += dx;
      ny += dy;
    }

    if (count === 5) {  
      const prevX = x - dx;
      const prevY = y - dy;
      const nextX = x + dx * 5;
      const nextY = y + dy * 5;

      if (!(isValid(prevX, prevY) && map[prevX][prevY] === color) &&
          !(isValid(nextX, nextY) && map[nextX][nextY] === color)) {
        return { color, x: x + 1, y: y + 1 };
      }
    }
  }
  return null;
}

for (let x = 0; x < 19; x++) {
    for (let y = 0; y < 19; y++) {
      if (map[x][y] !== 0) {
        const result = checkWinner(x, y, map[x][y]);
        if (result) {
          console.log(result.color);
          console.log(`${result.x} ${result.y}`);
        return;
      }
    }
  }
}
console.log(0);