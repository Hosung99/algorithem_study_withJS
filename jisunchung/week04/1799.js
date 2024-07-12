const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const board = input.map((line) => line.split(" ").map(Number));
const diag1 = new Array(2 * N).fill(false); // \ 대각선 사용 여부(col-row) 음수방지를 위해서 n을 더해줌
const diag2 = new Array(2 * N).fill(false); // / 대각선 사용 여부(col+row)
let answer = [0, 0];

function placeBishops(row, col, count, color) {
  //열이 체스판을 넘어간 경우 다음행으로 넘어감
  if (col >= N) {
    row++;
    //새로운 행의 시작 열 결정
    col = col % 2 === 0 ? 1 : 0;
  }
  //행이 체스판 크기를 넘어간 경우 검사를 모두 했다는 것을 의미함
  if (row >= N) {
    answer[color] = Math.max(answer[color], count);
    return;
  }
  //(0, n-1) (n-1, 0) 두개의 경우가 \ 대각선의 최소,최대값임
  // -n+1 <= col - row <= n-1
  // 1 <= col - row + n <= 2n-1
  if (board[row][col] && !diag1[col - row + N] && !diag2[col + row]) {
    diag1[col - row + N] = diag2[col + row] = true;
    //현재 행에 비숍을 배치하는 경우
    placeBishops(row, col + 2, count + 1, color);
    diag1[col - row + N] = diag2[col + row] = false;
  }
  //현재 행에 비숍을 배치하지 않고 다음행으로 이동
  placeBishops(row, col + 2, count, color);
}

placeBishops(0, 0, 0, 0); //검정
placeBishops(0, 1, 0, 1); //흰색
console.log(answer[0] + answer[1]);
