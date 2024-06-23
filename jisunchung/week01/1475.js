let n = require("fs").readFileSync("input.txt").toString().trim();

let arr = Array(10).fill(0);
let count = 0;

for (let i = 0; i < n.length; i++) {
  if (n[i] === "9" || n[i] === "6") {
    count++;
  } else {
    arr[n[i]]++;
  }
}

const arrMax = Math.max(...arr);
if (arrMax >= Math.ceil(count / 2)) {
  console.log(arrMax);
} else {
  console.log(Math.ceil(count / 2));
}
