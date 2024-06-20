const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function anagram() {
  let aArray = input[0].split('');
  let bArray = input[1].split('');
  let count = 0;

  for (let i = 0; i < aArray.length; i++) {
    let index = bArray.indexOf(aArray[i]);
    if (index !== -1) {
      bArray.splice(index, 1);
    } else {
      count++;
    }
  }
  count += bArray.length;
  return count;
}
console.log(anagram());