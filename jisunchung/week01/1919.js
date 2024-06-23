const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

//접근: 서로 다른 문자가 몇개 있는지 알면됨!
const [a, b] = input;
let charCount = {};
let answer = 0;

for (c of a) {
  charCount[c] = charCount[c] ? charCount[c] + 1 : 1;
}

//b문자열을 탐색해서 같은게 있으면 빈도수 빼기!
for (c of b) {
  if (charCount[c]) {
    charCount[c]--;
  } else {
    answer++;
  }
}

//charCount에서 남아있는개수->b와 같지않은 a의 char개수를 answer에 더하기
for (count of Object.values(charCount)) {
  answer += count;
}

console.log(answer);
