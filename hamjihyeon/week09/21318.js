const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "hamjihyeon/week09/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const piano = input[1].split(" ").map(Number);
const Q = +input[2];
const queries = input.slice(3).map((val) => val.split(" ").map(Number));

const changes = new Array(N + 1).fill(0);

for (let i = 1; i < N; i++) {
    if (piano[i - 1] > piano[i]) {
        changes[i + 1] = 1;
    }
}

const prefixSum = new Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1] + changes[i];
}

const result = [];
for (const [L, R] of queries) {
    result.push(prefixSum[R] - prefixSum[L]);
}

console.log(result.join("\n"));
