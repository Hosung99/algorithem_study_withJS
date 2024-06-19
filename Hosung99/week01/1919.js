const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution() {
  let [a, b] = input;
  let count = 0;
  let arrA = new Array(26).fill(0);
  let arrB = new Array(26).fill(0);
  for (let i = 0; i < a.length; i++) {
    arrA[a.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < b.length; i++) {
    arrB[b.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < 26; i++) {
    count += Math.abs(arrA[i] - arrB[i]);
  }
  return count.toString();
}

console.log(solution());
