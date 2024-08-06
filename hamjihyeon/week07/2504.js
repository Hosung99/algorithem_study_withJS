const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "hamjihyeon/week07/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

const stack = [];
let result = 0;
let temp = 1; 
let isValid = true;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    temp *= 2;
    stack.push("(");
  } else if (input[i] === "[") {
    temp *= 3;
    stack.push("[");
  } else if (input[i] === ")") {
    if (stack.length === 0 || stack[stack.length - 1] !== "(") {
      isValid = false;
      break;
    }
    if (input[i - 1] === "(") {
      result += temp;
    }
    temp /= 2;
    stack.pop();
  } else if (input[i] === "]") {
    if (stack.length === 0 || stack[stack.length - 1] !== "[") {
      isValid = false;
      break;
    }
    if (input[i - 1] === "[") {
      result += temp;
    }
    temp /= 3;
    stack.pop();
  }
}

if (!isValid || stack.length !== 0) {
  result = 0;
}

console.log(result);
