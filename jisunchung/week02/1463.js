const N = Number(require("fs").readFileSync("input.txt").toString().trim());

//사용가능 연산 ->  3으로 나눠떨어지면 3으로나누기, 2로 나눠떨어지면 2로, 1빼기

//dp[i]는 i를 1로 만들 수 있는 최소 연산 횟수

const dp = Array(N + 1).fill(0);

for (let i = 2; i <= N; i++) {
  //모든 경우 1을 빼는 연산이 가능하기 때문에 먼저 해줌
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[N]);
