const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((val) => val.split("").map(Number));
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(2).fill(false))
);
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let queue = [[0, 0, 0, 0]];
visited[0][0][0] = true;

function bfs() {
  let front = 0;

  while (front < queue.length) {
    const [r, c, dist, crashed] = queue[front++];

    if (r === N - 1 && c === M - 1) return dist + 1;

    for (let [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr >= 0 && nr < N && nc >= 0 && nc < M && !visited[nr][nc][crashed]) {
        if (board[nr][nc] === 0) {
          visited[nr][nc][crashed] = true;
          queue.push([nr, nc, dist + 1, crashed]);
        } else if (board[nr][nc] === 1 && !crashed) {
          visited[nr][nc][crashed] = true;
          queue.push([nr, nc, dist + 1, 1]);
        }
      }
    }
  }
  return -1;
}

console.log(bfs());
