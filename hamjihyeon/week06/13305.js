const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = parseInt(input[0]);;
const distance = input[1].split(' ').map(BigInt);
const price = input[2].split(' ').map(BigInt);;

function solution() {
  let result = 0n;
  let minPrice = price[0];
  for (let i = 0; i < N - 1; i++) {
    if (price[i] < minPrice) {
      minPrice = price[i];
    }
    result += minPrice * distance[i];
  }
  return String(result);
}
console.log(solution());