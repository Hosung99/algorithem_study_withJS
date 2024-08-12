const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [H, W] = input[0].split(" ").map(Number);
const blocks = input[1].split(" ").map(Number);
let left = 0;
let right = W - 1;
let left_max = blocks[left];
let right_max = blocks[right];
let total_water = 0;

if (W === 0) return 0;

while (left <= right) {
  if (left_max <= right_max) {
    total_water += left_max - blocks[left] < 0 ? 0 : left_max - blocks[left];
    left++;
    left_max = Math.max(left_max, blocks[left]);
  } else {
    total_water +=
      right_max - blocks[right] < 0 ? 0 : right_max - blocks[right];
    right--;
    right_max = Math.max(right_max, blocks[right]);
  }
}

console.log(total_water);
