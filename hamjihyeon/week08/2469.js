const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "hamjihyeon/week08/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const k = +input[0];
const n = +input[1];
const result = input[2].split("");
const ladder = input.slice(3).map((v) => v.split(""));
let up = Array.from({length: k}, (_, i) => String.fromCharCode(i + 65));
let down = result.slice();
let flag = -1;

// 위에서부터
for (let i = 0; i < n; i++) {
  if (ladder[i][0] === "?") {
    flag = i;
    break ;
  }
  for (let j = 0; j < k - 1; j++) {
    if (ladder[i][j] === "-") {
      [up[j], up[j + 1]] = [up[j + 1], up[j]];
    }
  }
}

// 밑에서부터
for (let i = n - 1; i > flag; i--) {
  for (let j = 0; j < k - 1; j++) {
    if (ladder[i][j] === "-") {
      [down[j], down[j + 1]] = [down[j + 1], down[j]];
    }
  }
}

// ?부분 채우기
let resultLadder = "";
for (let i = 0; i < k - 1; i++) {
  if (up[i] === down[i]) {
      resultLadder += "*";
  } else if (up[i] === down[i + 1] && up[i + 1] === down[i]) {
      resultLadder += "-";
      [up[i], up[i + 1]] = [up[i + 1], up[i]];
  } else {
      resultLadder = "x".repeat(k - 1);
      break;
  }
}

console.log(resultLadder);