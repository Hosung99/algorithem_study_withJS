const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function water() {
  const N = parseInt(input[0]);
  const nature = input[1].split(' ').map(Number).sort((a, b) => a - b);;

  let left = 0;
  let right = N - 1;
  let closetZero = Infinity;
  let result = [];

  while (left < right) {
    const sum = nature[left] + nature[right];
    if (Math.abs(sum) < closetZero) {
      closetZero = Math.abs(sum);
      result = [nature[left], nature[right]];
    }
    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
  return result.join(' ');
}
console.log(water());