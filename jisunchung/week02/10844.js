const N = Number(require("fs").readFileSync("input.txt").toString().trim());

const dp = Array.from(Array(N + 1), () => new Array(10));
//0으로 시작할수는 없음
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

//index+1, index-1 위치의 숫자를 더해주면 된다
//단 0과 9의 경우 0은 1, 9는 8밖에 없어서 예외처리
//dp[i][j] 에서 i는 길이 j는 마지막에 오는 숫자
for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    //0과 9경우 NaN값이 있어서 그건 0으로 처리함
    dp[i][j] = (dp[i - 1][j - 1] || 0) + ((dp[i - 1][j + 1] || 0) % 1000000000);
  }
}

console.log(
  dp[N].reduce((accumulator, currentValue) => accumulator + currentValue, 0) %
    1000000000
);
