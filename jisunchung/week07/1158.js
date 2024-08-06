const [N, K] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const queue = Array.from({ length: N }, (_, idx) => idx + 1);
const result = [];

while (queue.length) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.shift());
  }
  result.push(queue.shift());
}
console.log(`<${result.join(", ")}>`);
