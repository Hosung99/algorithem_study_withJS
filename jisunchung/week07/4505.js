const input = require("fs").readFileSync("input.txt").toString().trim();

function calculateValue() {
  let stack = [];
  let tmp = 1;
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (char === "(") {
      stack.push(char);
      tmp *= 2;
    } else if (char === "[") {
      stack.push(char);
      tmp *= 3;
    } else if (char === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        return 0;
      }
      if (input[i - 1] === "(") {
        result += tmp;
      }
      stack.pop();
      tmp /= 2;
    } else if (char === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== "[") {
        return 0;
      }
      if (input[i - 1] === "[") {
        result += tmp;
      }
      stack.pop();
      tmp /= 3;
    }
  }

  if (stack.length !== 0) {
    return 0;
  }

  return result;
}

console.log(calculateValue());
