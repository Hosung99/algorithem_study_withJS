const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function cutTree() {
  const [N, M] = input[0].split(' ').map(Number);
  const heightTree = input[1].split(' ').map(Number).sort((a, b) => a - b);

  let left = 0;
  let right = heightTree[heightTree.length - 1];
  let result = 0;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    let count = 0;
    heightTree.forEach((num => {
      count += num - mid > 0 ? num - mid : 0;
    }));
    if (count >= M) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}
console.log(cutTree());