const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution() {
  let a = input[0];
  let ans = 0;
  const arr = new Array(10).fill(0);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "9") {
      if (arr[6] < arr[9]) {
        arr[6]++;
      } else arr[9]++;
    } else if (a[i] === "6") {
      if (arr[9] < arr[6]) {
        arr[9]++;
      } else arr[6]++;
    } else {
      arr[a[i]]++;
    }
  }
  for (let i = 0; i < 10; i++) {
    ans = Math.max(ans, arr[i]);
  }
  return ans.toString();
}

console.log(solution());
