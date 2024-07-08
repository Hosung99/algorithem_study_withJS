const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = [];

function binarySearch(N, M) {
  let ans = 0;
  let start = 0;
  let end = arr[arr.length - 1];
  let mid = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    let sum = 0;
    for (let i = 0; i < N; i++) {
      if (arr[i] - mid > 0) sum += arr[i] - mid;
    }
    if (sum >= 0 && sum >= M) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}

function solution() {
  let inputs = input[0].split(" ");
  let [N, M] = [inputs[0], inputs[1]];
  input[1].split(" ").forEach((el) => {
    arr.push(+el);
  });
  arr.sort((a, b) => a - b);
  return binarySearch(N, M);
}

console.log(solution());
