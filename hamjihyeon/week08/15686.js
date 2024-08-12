const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "hamjihyeon/week08/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const city = input.slice(1).map((row) => row.split(" ").map(Number));
const chicken = [];
const house = [];
let result = Infinity;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (city[i][j] === 1) {
      house.push([i, j]);
    } else if (city[i][j] === 2) {
      chicken.push([i, j]);
    }
  }
}

function abs(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function dfs(start, i, select) {
  if (select === M) {
    let sum = 0;
    for (const h of house) {
      let min = Infinity;
      for (const s of start) {
        min = Math.min(min, abs(h, s));
      }
      sum += min;
    }
    result = Math.min(result, sum);
  }

  if (i === chicken.length) {
    return ;
  }

  start.push(chicken[i]);
  dfs(start, i + 1, select + 1);
  start.pop();
  dfs(start, i + 1, select);
}

dfs([], 0, 0);
console.log(result);