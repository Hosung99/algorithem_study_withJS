const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "hamjihyeon/week08/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);
const block = input[1].split(" ").map(Number);
let result = 0;

for (let i = 1; i <= W - 1; i++) {
  const left = Math.max(...block.slice(0, i));
  const right = Math.max(...block.slice(i + 1));
  const rain = Math.min(left, right);
  if (rain > block[i]) {
    result += rain - block[i];
  }
}
console.log(result);