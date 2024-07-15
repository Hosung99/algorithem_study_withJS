const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function isCorrect(arr,seq) {
  let word = "";
  let consonant = 0;
  let gather = 0;
  arr.forEach((el) => {
    word += seq[el];
  });
  for (let i = 0; i < arr.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      gather++;
    } else {
      consonant++;
    }
  }
  if (gather >= 1 && consonant >= 2) return word + "\n";
  else return "";
}

function solution() {
  input[0] = input[0].split(" ");
  let [L, C] = [+input[0][0], +input[0][1]];
  let ans = "";
  let seq = input[1].split(" ").sort();
  let visited = new Array(16).fill(false);
  let arr = [];
  function dfs(idx, depth) {
    if (depth === L) {
      let flag = isSorted(arr);
      if (flag) {
        let word = isCorrect(arr, seq);
        ans += word;
      }
      return;
    }
    for (let i = idx; i < C; i++) {
      if (visited[i] === false) {
        arr.push(i);
        visited[i] = true;
        dfs(idx + 1, depth + 1);
        arr.pop();
        visited[i] = false;
      }
    }
  }
  dfs(0, 0);
  return ans;
}

console.log(solution());
