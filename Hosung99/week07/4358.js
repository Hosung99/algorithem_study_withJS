const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const m = new Map();

function solution() {
  let ans = "";
  let cnt = 0;
  input.forEach((item) => {
    if (m.has(item)) {
      m.set(item, m.get(item) + 1);
    } else {
      m.set(item, 1);
    }
    cnt++;
  });
  let sorted = new Map([...m].sort());
  for (let temp of sorted) {
    ans += `${temp[0]} ${((temp[1] * 100) / cnt).toFixed(4)}\n`;
  }
  return ans;
}

console.log(solution());
