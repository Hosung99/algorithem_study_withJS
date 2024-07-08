const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function findNumber() {
  const N = input[1].split(' ').map(Number).sort((a, b) => a - b);
  const findN = input[3].split(' ').map(Number);

  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return false;
  }
  const result = findN.map((num) => binarySearch(N, num) ? 1 : 0);
  return result.join('\n');
}

console.log(findNumber());