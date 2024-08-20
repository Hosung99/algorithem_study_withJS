const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "hamjihyeon/week09/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map((val) => val.split(" ").map(Number));
const prefixSum = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
        prefixSum[i][j] = arr[i - 1][j - 1] + prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1];
    }
}

let result = -Infinity;

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
        for (let x = i; x <= N; x++) {
            for (let y = j; y <= M; y++) {
                let sum = prefixSum[x][y] - prefixSum[i - 1][y] - prefixSum[x][j - 1] + prefixSum[i - 1][j - 1];
                    result = Math.max(result, sum);
            }
        }
    }
}
console.log(result);
