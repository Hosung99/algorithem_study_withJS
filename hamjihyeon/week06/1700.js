const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const use = input[1].split(' ').map(Number);
const plug = [];

let result = 0;

for (let i = 0; i < K; i++) {
  const item = use[i];

  if (plug.includes(item)) {
    continue;
  }

  if (plug.length < N) {
    plug.push(item);
  } else {
    let last = -1;
    let unPlug = -1;

    for (const p of plug) {
      const next = use.slice(i + 1).indexOf(p);

      if (next === -1) {
        unPlug = p;
        break;
      }

      if (next > last) {
        last = next;
        unPlug = p;
      }
    }
    plug.splice(plug.indexOf(unPlug), 1);
    plug.push(item);
    result++;
  }
}

console.log(result);