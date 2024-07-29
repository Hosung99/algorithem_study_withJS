const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution() {
  let ans = 0;
  let [N, K] = input[0].split(" ").map(Number);
  input[1] = input[1].split(" ").map(Number);
  let arr = [];
  for (let i = 0; i < K; i++) {
    if (arr.includes(input[1][i])) continue;
    if (arr.length < N) {
      arr.push(input[1][i]);
    } else {
      let temp = 0;
      let temp_idx = 0;
      for (let j = 0; j < arr.length; j++) {
        let l = i;
        for (; l < K; l++) {
          if (input[1][l] === arr[j]) {
            break;
          }
        }
        if (l > temp) {
          temp = l;
          temp_idx = j;
        }
      }
      arr[temp_idx] = input[1][i];
      ans++;
    }
  }
  return ans;
}

console.log(solution());
