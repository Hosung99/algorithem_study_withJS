const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const K = Number(input[N]);
const jumpEnergy = input.slice(1, N).map((line) => line.split(" ").map(Number));

//배열 초기화, 0,1,2 번째 돌 까지는 매우 큰 점프 사용 못하기 때문에 값 넣어주기
const dp = Array.from({ length: N }, () => [10000, 10000]);
dp[0][0] = 0;
if (N > 1) dp[1][0] = jumpEnergy[0][0];
if (N > 2)
  dp[2][0] = Math.min(jumpEnergy[0][0] + jumpEnergy[1][0], jumpEnergy[0][1]);

//dp[i][0]은 매우 큰 점프를 사용하지 않을때의 최소에너지, dp[i][1]은 매우 큰 점프 사용했을 때의 최소 에너지

// 점화식 적용 (작은 점프, 큰 점프, 매우 큰 점프)
for (let i = 3; i < N; i++) {
  dp[i][0] = Math.min(
    dp[i - 1][0] + jumpEnergy[i - 1][0],
    dp[i - 2][0] + jumpEnergy[i - 2][1]
  );
  dp[i][1] = Math.min(
    dp[i - 1][1] + jumpEnergy[i - 1][0],
    dp[i - 2][1] + jumpEnergy[i - 2][1],
    dp[i - 3][0] + K
  );
}

// 최소값 계산
const minEnergy = Math.min(dp[N - 1][0], dp[N - 1][1]);
console.log(minEnergy);
