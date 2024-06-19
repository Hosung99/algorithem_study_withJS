const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution() {
  let arr = [];
  for (let i = 1; i <= 20; i++) {
    arr.push(i);
  }
  input.map((ele) => {
    let [a, b] = ele.split(" ");
    a--, b--;
    let end = b;
    for (let i = a; i < (a + b) / 2; i++) {
      [arr[i], arr[end]] = [arr[end], arr[i]];
      end--;
    }
  });
  return arr.join("\n");
}
console.log(solution());
