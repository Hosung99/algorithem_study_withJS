const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n'); 

function star() {
  let star = '';
  for (let i = 0; i < input; i++) {
    star += ' '.repeat(i) + '*'.repeat(2 * (input - i) - 1) + '\n';
  }
  for (let i = input - 2; i >= 0; i--) {
    star += ' '.repeat(i) + '*'.repeat(2 * (input - i) - 1) + '\n';
  }
  return star;
}
console.log(star());