const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution() {
  let ans = "";
  let T = +input[0];
  let idx = 1;
  while (T--) {
    let N = +input[idx++];
    let cnt = N;
    let arr = [];
    while (N--) {
      let [A, B] = input[idx++].split(" ").map(Number);
      arr.push({ A, B });
    }
    arr.sort((a, b) => {
      return a.A - b.A;
    });
    let temp = arr[0].B;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].B > temp) {
        cnt--;
      } else {
        temp = arr[i].B;
      }
    }
    ans += cnt.toString() + "\n";
  }
  return ans;
}

console.log(solution());
