const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

function reverseCard() {
  let cardArr = [];
  for (let i = 0; i < 20; i++) {
    cardArr.push(i + 1);
  }
  const seperate = input.split('\n');
  seperate.forEach(seperate => {
    const [start, end] = seperate.split(' ').map(Number);
    const reverseArr = cardArr.slice(start - 1, end).reverse();
    cardArr.splice(start - 1, end -  start + 1, ...reverseArr);
  });
  return cardArr.join(' ');
}

console.log(reverseCard());