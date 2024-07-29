const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(/\n/);

const n = Number(input[0]);
const distances = input[1].split(" ").map((v) => BigInt(v));
const prices = input[2].split(" ").map((v) => BigInt(v));

let result = prices[0] * distances[0];
let minPrice = prices[0];

for (let i = 1; i < n - 1; i++) {
  if (prices[i] < minPrice) minPrice = prices[i];
  result += minPrice * distances[i];
}
console.log(String(result));
