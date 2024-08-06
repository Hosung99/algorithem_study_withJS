const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(filePath).toString().trim();

let stack = [];

function solution() {
  let temp = 1;
  let ans = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      stack.push(input[i]);
      temp *= 2;
    } else if (input[i] === "[") {
      stack.push(input[i]);
      temp *= 3;
    } else if (input[i] === ")") {
      if (!stack.length || stack[stack.length - 1] !== "(") {
        ans = 0;
        break;
      }
      if (input[i - 1] === "(") {
        ans += temp;
        temp /= 2;
        stack.pop();
      } else {
        temp /= 2;
        stack.pop();
      }
    } else if (input[i] === "]") {
      if (!stack.length || stack[stack.length - 1] !== "[") {
        ans = 0;
        break;
      }
      if (input[i - 1] === "[") {
        ans += temp;
        temp /= 3;
        stack.pop();
      } else {
        temp /= 3;
        stack.pop();
      }
    }
  }
  if (stack.length > 0) {
    ans = 0;
  }
  return ans;
}

console.log(solution());
