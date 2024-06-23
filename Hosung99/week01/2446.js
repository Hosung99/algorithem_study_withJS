const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
function solution() {
  let str = "";
  for (let i = input * 2 - 1; i >= 1; i -= 2) {
    for (let j = 1; j < (input * 2 - i) / 2; j++) {
      str += " ";
    }
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = 3; i <= input * 2 - 1; i += 2) {
    for (let j = (input * 2 - i) / 2; j > 1; j--) {
      str += " ";
    }
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(solution());
