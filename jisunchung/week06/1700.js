const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let tab = new Set();
let unpluggedCount = 0;

for (let i = 0; i < K; i++) {
  if (tab.has(arr[i])) continue;

  if (tab.size < N) {
    tab.add(arr[i]);
    continue;
  }
  let lastUsedIndex = -1; // 멀티탭에 빈 자리가 없는 경우
  let itemToUnplug = -1;

  for (let item of tab) {
    let nextUseIndex = arr.slice(i + 1).indexOf(item);
    if (nextUseIndex === -1) {
      itemToUnplug = item;
      break;
    } else if (nextUseIndex > lastUsedIndex) {
      lastUsedIndex = nextUseIndex;
      itemToUnplug = item;
    }
  }

  tab.delete(itemToUnplug);
  tab.add(arr[i]);
  unpluggedCount++;
}

console.log(unpluggedCount);
