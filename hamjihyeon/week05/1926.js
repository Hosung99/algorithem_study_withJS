const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const map = [];
let pictureCnt = 0;
let pictureSize = 0;

function bfs(x, y) {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const queue = [];
  queue.push([x, y]);
  map[x][y] = 0;
  pictureSize++;
  while (queue.length) {
    const [nx, ny] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [mx, my] = [nx + dx[i], ny + dy[i]];
      if (mx >= 0 && mx < n && my >= 0 && my < m && map[mx][my] === 1) {
        queue.push([mx, my]);
        map[mx][my] = 0;
        pictureSize++;
      }
    }
  }
}

function picture() {
  for (let i = 1; i <= n; i++) {
    map.push(input[i].split(' ').map(Number));
  }
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 1) {
        pictureCnt++;
        pictureSize = 0;
        bfs(i, j);
        max = Math.max(max, pictureSize);
      }
    }
  }
  return `${pictureCnt}\n${max}`;
}
console.log(picture());