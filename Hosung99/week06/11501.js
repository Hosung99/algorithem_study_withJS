const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution() {
  let ans = "";
  let T = +input[0];
  let N_idx = 1;
  while (T--) {
    let ans_temp = 0;
    let splitted_temp;
    let N = +input[N_idx++];
    let splitted = input[N_idx++].split(" ").map(Number);
    splitted_temp = splitted[N - 1];
    for (let i = N - 1; i > 0; i--) {
      if (splitted_temp > splitted[i - 1]) {
        ans_temp += splitted_temp - splitted[i - 1];
      } else {
        splitted_temp = splitted[i - 1];
      }
    }
    ans += ans_temp.toString() + "\n";
  }
  return ans;
}

console.log(solution());
