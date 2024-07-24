const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const T = input.shift();
for (let i = 0; i < T * 2; i += 2) {
  const N = parseInt(input[i]);
  let stock = input[i + 1].split(' ').map(Number);
  let result = 0;
  let maxStock = 0;
  for (let i = N - 1; i >= 0; i--) {
    if (stock[i] > maxStock) {
      maxStock = stock[i];
    } else if (stock[i] < maxStock) {
      result += maxStock - stock[i];
    }
  }
  console.log(result);
}