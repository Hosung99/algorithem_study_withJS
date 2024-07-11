const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [L, C] = input[0].split(' ').map(Number);
const alphabet = input[1].split(' ').sort();
let result = [];
let output = [];

const vowels = (char) => {
  return 'aeiou'.includes(char);
}

function dfs(start, cntVowel, cntConsonant) {
  if (output.length === L) {
    for (let i = 0; i < L; i++) {
      if (vowels(output[i])) {
        cntVowel++;
      } else {
        cntConsonant++;
      }
    }
    if (cntVowel >= 1 && cntConsonant >= 2) {
      return result.push(output.join(''));
    }
  }
  for (let i = start; i < C; i++) {
      output.push(alphabet[i]);
      dfs(i + 1, cntVowel, cntConsonant);
      output.pop();
  }
}

function makePassword() {
  dfs(0, 0, 0);
  return result.join('\n');
}
console.log(makePassword());