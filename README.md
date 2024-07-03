# algorithem_study_withJS
자바스크립트를 이용한 알고리즘 스터디

## 🙋 참여 방법

1. repository fork
2. 브랜치 생성

   ```
   git checkout -b <branch_name>
   ```

   > ❓ Q&A <br>
   > Q1: fork 했는데 그냥 브랜치 안 만들고 해도 되나요? <br>
   > A1: **안됩니다.**
   >
   > Q2: 브랜치 왜 만드는데요? <br>
   > A2: **충돌 방지**와 **본인 파일만 따로 관리**하기 위해 만듭니다.

   ⚠️ **주의사항** <br>
   ❌ 브랜치에서 절대 `sync fork` 및 `git pull` 금지 ❌

3. 만든 브랜치를 remote repository에 등록

   ```sh
   git push -u origin <branch_name>
   ```

4. 푼 문제를 1️⃣ **본인 이름의 폴더에 넣고**, 2️⃣ **[convention](#commit)에 맞춰** commit

5. 제출 기한까지 본인의 브랜치를 **[convention](#pr)에 맞춰** PR

   📅 제출 기한 : 매주 토요일 23시 59분 59초 <br>
   💸 벌금 : 5000원

6. 주 마다 대면/비대면으로 **코드리뷰**를 진행 <br/>
대면 시 : 문제와 함께 본인의 코드를 설명. (문제마다 사다리타기로 진행자 결정) <br/>
비대면 시 : PR에 문제별로 본인의 코드를 설명. <br/>
<br/>

7. **문제 선정** <br>
문제 선정의 경우 **스터디장(Hosung99)** 이 선정합니다. <br/>
좋은 문제나, 풀고싶은 문제가 있을 경우 신청하시면 반영해드립니다. <br/>
주로 [바킹독 문제집](https://github.com/encrypted-def/basic-algo-lecture/blob/master/workbook.md) 을 참고하여 선정할 예정입니다. <br/>
주차마다 필요한 알고리즘이 있으므로 해당 주차의 바킹독 영상을 보시면 해당 알고리즘을 이해하기 편할 것 같습니다. <br/>
스터디의 주 목적은 알고리즘의 대한 이해 보단 자바스크립트로 문제를 어떻게 풀지 공부하기 위해 만들어졌습니다. <br/>
<br/>

8. **기본 입출력** <br/>
자바스크립트의 기본 입출력은 크게 fs, readline모듈로 나뉘는데 통일성을 위해 효율이 높은 fs모듈 사용을 권장합니다. <br/>
추가적인 정보는 해당 [링크](https://velog.io/@bigsaigon333/Javascript%EB%A1%9C-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%A4%80%EB%B9%84%ED%95%98%EA%B8%B01-%EC%9E%85%EC%B6%9C%EB%A0%A5)를 참조하시면 좋을 것 같습니다.
```
const fs = require('fs');

// TODO: 백준 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim().split('\n'); 
// js파일과 같은 경로 상에 test.txt를 만들고 입력값을 넣는다.

// 풀이
function solution(arr) {
  const [a, b] = arr[0].split(' ');
  return Number(a) + Number(b);
}

console.log(solution(input));
```

## 🤝 Convention

### commit

```
<tag>: <problem_name>
```

1. 문제별로 각각 commit

2. tag는 소문자로 작성

   | tag      | 설명                                |
   | -------- | ---------------------------------- |
   | feat     | 문제 제출                            |
   | fix      | 틀린 문제 수정                        |
   | refactor | 맞은 문제 리팩토링                     |
   | style    | formatting, missing semi colons 등 |
   | docs     | documentation                      |
   | chore    | move or rename resources, maintain |
   | merge    | merge                              |

### PR Title

```
[<week>] <이름>
```

1. PR 제목은 모두 소문자로 작성

2. 해당하는 요일의 라벨을 함께 달아주세요!

## ✍️ 문제

| 주차 | 주제 | 문제 | 난이도 |
| :-: | :-: | :--: | :--: |
| **week01**| 간단한 입출력 |
| | | [카드 역배치](https://www.acmicpc.net/problem/10804) | <img src="https://static.solved.ac/tier_small/4.svg" height="25" align="center"/> |
| | | [별찍기9](https://www.acmicpc.net/problem/2446) | <img src="https://static.solved.ac/tier_small/3.svg" height="25" align="center"/> |
| | | [애너그램 만들기](https://www.acmicpc.net/problem/1919) | <img src="https://static.solved.ac/tier_small/4.svg" height="25" align="center"/> |
| | | [방 번호](https://www.acmicpc.net/problem/1475) | <img src="https://static.solved.ac/tier_small/6.svg" height="25" align="center"/> |
| **week02**| 다이나믹 프로그래밍 |
| | | [1로 만들기](https://www.acmicpc.net/problem/1463) | <img src="https://static.solved.ac/tier_small/9.svg" height="25" align="center"/> |
| | | [가장 긴 증가하는 부분 수열](https://www.acmicpc.net/problem/11053) | <img src="https://static.solved.ac/tier_small/9.svg" height="25" align="center"/> |
| | | [쉬운 계단 수](https://www.acmicpc.net/problem/10844) | <img src="https://static.solved.ac/tier_small/10.svg" height="25" align="center"/> |
| | | [포도주 시식](https://www.acmicpc.net/problem/2156) | <img src="https://static.solved.ac/tier_small/10.svg" height="25" align="center"/> |
| | | [징검다리 건너기](https://www.acmicpc.net/problem/21317) | <img src="https://static.solved.ac/tier_small/10.svg" height="25" align="center"/> |
| **week03**| 이분 탐색 |
| | | [수 찾기](https://www.acmicpc.net/problem/1920) | <img src="https://static.solved.ac/tier_small/7.svg" height="25" align="center"/> |
| | | [과자 나눠주기](https://www.acmicpc.net/problem/16401) | <img src="https://static.solved.ac/tier_small/9.svg" height="25" align="center"/> |
| | | [나무 자르기](https://www.acmicpc.net/problem/2805) | <img src="https://static.solved.ac/tier_small/9.svg" height="25" align="center"/> |
| | | [용액](https://www.acmicpc.net/problem/2467) | <img src="https://static.solved.ac/tier_small/12.svg" height="25" align="center"/> |




<!-- problem table template

|| 24.00.00 (❓) | [❓](https://www.acmicpc.net/problem/❓) | <img src="https://static.solved.ac/tier_small/❓.svg" height="25" align="center"/> | - |

 -->

## 참여자

<table>
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/Hosung99">
              <img src="https://github.com/Hosung99.png" width="100">
              <br />
              <b>손성호 </br>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/jisunchung">
              <img src="https://github.com/jisunchung.png" width="100">
              <br />
              <b>정지선 </br>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/hamjihyeon">
              <img src="https://github.com/hamjihyeon.png" width="100">
              <br />
              <b>함지현 </br>
            </a> 
        </td>
    </tr>
      <tr align="center">
        <td>
            ISFP
        </td>
        <td>
            ISFP
        </td>
        <td>
            ESTP
        </td>
    </tr>
</table>
