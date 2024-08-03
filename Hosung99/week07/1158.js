const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution() {
  let N = input[0];
  let K = input[1];
  let arr = [];
  let temp_arr = [];
  let ans = "";
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }
  let index = 0;
  while (arr.length) {
    index++;
    if (index === K) {
      index = 0;
      temp_arr.push(arr.shift());
    } else {
      arr.push(arr.shift());
    }
  }
  ans += "<" + temp_arr.join(", ") + ">";
  return ans;
}

console.log(solution());
