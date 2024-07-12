const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [L, C] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").sort();
const vowels = new Set(["a", "e", "i", "o", "u"]);
let result = [];
let answer = "";

function dfs(depth, start, vowel_count) {
  if (depth === L) {
    if (vowel_count >= 1 && L - vowel_count >= 2)
      answer += result.join("") + "\n";
    return;
  }
  for (let i = start; i < C; i++) {
    result[depth] = arr[i];
    dfs(depth + 1, i + 1, vowels.has(arr[i]) ? vowel_count + 1 : vowel_count);
  }
}
dfs(0, 0, 0);
console.log(answer);
