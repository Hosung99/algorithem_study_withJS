const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let houses = [];
let chickens = [];
let minDistance = Infinity;
let result = [];

input.forEach((row, i) =>
  row.split(" ").forEach((val, j) => {
    if (val === "1") houses.push([i, j]);
    if (val === "2") chickens.push([i, j]);
  })
);

function calculateDistance() {
  let totalDistance = 0;
  for (const [hr, hc] of houses) {
    let min = Infinity;
    for (const [rr, rc] of result) {
      const dis = Math.abs(hr - rr) + Math.abs(hc - rc);
      min = Math.min(min, dis);
    }
    totalDistance += min;
  }
  return totalDistance;
}

function dfs(start) {
  if (result.length === M) {
    minDistance = Math.min(minDistance, calculateDistance());
    return;
  }
  for (let i = start; i < chickens.length; i++) {
    result.push(chickens[i]);
    dfs(i + 1);
    result.pop();
  }
}

dfs(0);
console.log(minDistance);
