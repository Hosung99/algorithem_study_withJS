const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution() {
  const k = +input.shift();
  const n = +input.shift();
  let start = [];
  for (let i = 0; i < k; i++) {
    start[i] = String.fromCharCode(65 + i);
  }
  let result = input[0].split("");
  input.shift();
  let ans = "";
  let hidden_line = 0;
  let arr = Array.from({ length: 1002 }, () => Array(1002).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < k - 1; j++) {
      if (input[i][j] === "?") {
        hidden_line = i;
      }
      arr[i][j] = input[i][j];
    }
  }
  for (let i = 0; i < hidden_line; i++) {
    for (let j = 0; j < k - 1; j++) {
      if (arr[i][j] === "-") {
        [start[j], start[j + 1]] = [start[j + 1], start[j]];
      }
    }
  }
  for (let i = n - 1; i >= hidden_line + 1; i--) {
    for (let j = 0; j < k - 1; j++) {
      if (arr[i][j] === "-") {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  for (let i = 0; i < k - 1; i++) {
    if (start[i] === result[i]) {
      ans += "*";
    } else if (start[i] === result[i + 1] && start[i + 1] === result[i]) {
      [start[i], start[i + 1]] = [start[i + 1], start[i]];
      ans += "-";
    } else {
      ans = "x".repeat(k - 1);
      break;
    }
  }
  return ans;
}

console.log(solution());
