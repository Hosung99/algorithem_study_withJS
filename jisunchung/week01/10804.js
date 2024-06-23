const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let array = [];
for (let i = 0; i < 20; i++) {
  array.push(i + 1);
}
// 각 줄을 처리하면서 범위를 추출하고 해당 범위를 뒤집
input.forEach((line) => {
  const [start, end] = line.split(" ").map(Number);

  // 해당 범위를 뒤집고 원래 배열에 반영
  const reversed = array.slice(start - 1, end).reverse();
  array.splice(start - 1, end - start + 1, ...reversed);
});

console.log(array.join(" "));
