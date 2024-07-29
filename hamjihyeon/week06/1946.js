const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const T = input.shift();

const test = [];
for (let i = 0; i < T; i++) {
  const N = input.shift();
  const score = input.splice(0, N).map((i) => i.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
  test.push(score);
}

test.forEach(score => {
  let result = 1;
  let minScore = score[0][1];
  for (let i = 1; i < score.length; i++) {
    if (minScore > score[i][1]) {
      result++;
      minScore = score[i][1];
    }
  }
  console.log(result);
})