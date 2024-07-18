const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);
const map = [];
let max = 0;
let safeArea = 0;
let safeMax = 0;
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for (let i = 1; i <= n; i++) {
  map.push(input[i].split(' ').map(Number));
}

const maxRain = Math.max(...map.flat());

function bfs(x, y, rain, visited) {
  const queue = [[x, y]];
  visited[x][y] = true;

  while (queue.length) {
    const [nx, ny] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [mx, my] = [nx + dx[i], ny + dy[i]];
      if (mx >= 0 && mx < n && my >= 0 && my < n && map[mx][my] > rain && !visited[mx][my]) {
        queue.push([mx, my]);
        visited[mx][my] = true;
      }
    }
  }
}

function safe() {
  let maxSafeAreas = 0;
  for (let rain = 0; rain <= maxRain; rain++) {
    let safeAreaCount = 0;
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (map[i][j] > rain && !visited[i][j]) {
          bfs(i, j, rain, visited);
          safeAreaCount++;
        }
      }
    }
    maxSafeAreas = Math.max(maxSafeAreas, safeAreaCount);
  }
  return maxSafeAreas;
}
console.log(safe());