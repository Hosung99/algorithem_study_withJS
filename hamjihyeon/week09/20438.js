const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "hamjihyeon/week09/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K, Q, M] = input.shift().split(" ").map(Number);
const sleep = input.shift().split(" ").map(Number);
const attend = input.shift().split(" ").map(Number).filter((val) => !sleep.includes(val));
const student = new Array(N + 3).fill(false);
const prefixSum = new Array(N + 3).fill(0);

for (let a of attend) {
    for (let i = a; i <= N + 2; i += a) {
        if (!sleep.includes(i)) {
            student[i] = true;
        }
    }
}

for (let i = 3; i <= N + 2; i++) {
    prefixSum[i] = prefixSum[i - 1] + (student[i] ? 0 : 1);
}

let results = [];
const queries = input.map((val) => val.split(" ").map(Number));

for (let [S, E] of queries) {
	results.push(prefixSum[E] - prefixSum[S - 1]);
}
console.log(results.join("\n"));
