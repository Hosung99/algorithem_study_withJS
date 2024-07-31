const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "hamjihyeon/week07/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);

let queue = [];
let result = [];

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

let index = 0;

while (queue.length > 0) {
  index += K - 1;
  if (index >= queue.length) {
    index = index % queue.length;
  }
  result.push(queue.splice(index, 1)[0]);
}

console.log("<" + result.join(", ") + ">");
