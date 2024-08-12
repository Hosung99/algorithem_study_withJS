const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const K = Number(input[0]);
const N = Number(input[1]);

const finalResult = input[2].split("");
const ladder = input.slice(3);

let participants = Array.from({ length: K }, (_, i) =>
  String.fromCharCode(65 + i)
);
let questionIndex = ladder.findIndex((val) => val.includes("?"));

// 위에서 ?까지 계산
for (let i = 0; i < questionIndex; i++) {
  for (let j = 0; j < K - 1; j++) {
    if (ladder[i][j] === "-") {
      [participants[j], participants[j + 1]] = [
        participants[j + 1],
        participants[j],
      ];
    }
  }
}

// 아래에서 ?까지 계산
for (let i = N - 1; i > questionIndex; i--) {
  for (let j = 0; j < K - 1; j++) {
    if (ladder[i][j] === "-") {
      [finalResult[j], finalResult[j + 1]] = [
        finalResult[j + 1],
        finalResult[j],
      ];
    }
  }
}

let result = "";
for (let i = 0; i < K - 1; i++) {
  if (participants[i] === finalResult[i]) {
    result += "*";
  } else if (
    participants[i] === finalResult[i + 1] &&
    participants[i + 1] === finalResult[i]
  ) {
    result += "-";
    [participants[i], participants[i + 1]] = [
      participants[i + 1],
      participants[i],
    ];
  } else {
    result = "x".repeat(K - 1);
    break;
  }
}

console.log(result);
