const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const input = fs.readFileSync("hamjihyeon/week05/test.txt").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = input.slice(1).map(line => line.split('').map(Number));
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function move() {
  const queue = [[0, 0, 1, 0]];
  const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => [0, 0]));
  visited[0][0][0] = 1;

  let head = 0;
  while (head < queue.length) {
    const [x, y, count, broken] = queue[head++];
    if (x === N - 1 && y === M - 1) {
      return count;
    }
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (map[nx][ny] === 0 && visited[nx][ny][broken] === 0) {
          visited[nx][ny][broken] = 1;
          queue.push([nx, ny, count + 1, broken]);
        }
        if (map[nx][ny] === 1 && broken === 0 && visited[nx][ny][1] === 0) {
          visited[nx][ny][1] = 1;
          queue.push([nx, ny, count + 1, 1]);
        }
      }
    }
  }
  return -1;
}
console.log(move());