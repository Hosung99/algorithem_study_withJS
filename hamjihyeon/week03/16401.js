const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function shareSnack() {
  const [M, N] = input[0].split(' ').map(Number);
  const snack = input[1].split(' ').map(Number).sort((a, b) => a - b);

  let left = 0;
  let right = snack[snack.length - 1];
  let result = 0;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    let count = 0;
    snack.forEach((num => {
      count += Math.floor(num / mid);
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
console.log(shareSnack());
