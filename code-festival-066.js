/**
 * 문제
 * 탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
 * 순서에 맞게 쌓지 않으면 무너질 수 있습니다.
 * 예를 들면 정해진 순서가 BAC라면 A 다음 C가 쌓아져야 합니다.
 * 선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.
 * - B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
 * - B 다음 블럭이 C가 될 수 있습니다.
 *
 * 쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.
 * 1. 블럭은 알파벳 대문자로 표기합니다.
 * 2. 규칙에 없는 블럭이 사용될 수 있습니다.
 * 3. 중복된 블럭은 존재하지 않습니다.
 */

/**
 * 나의 풀이)
 * 경우의 수 나누기
 * 1. A 존재
 * - A의 인덱스가 B, D의 인덱스보다 앞이다 -> B의 인덱스가 D보다 앞이다 -> 가능
 * - A의 인덱스가 B, D 인덱스보다 뒤 -> 불가능
 * 2. A 존재 X
 * - B 존재 -> D의 인덱스보다 앞이다 -> 가능
 * - B 인덱스가 D 보다 뒤다 -> 불가능
 * - B 존재 X -> 가능
 * 3. A, B, D 모두 없다 -> 가능
 * 한계: 무수히 많은 if절로 코드가 매우 지저분해짐. 가독성도 구리고 로직이 꼬였는지 결과도 이상하다.
 */

// for (let i of tower) {
//   if (i.includes("A")) {
//     if (i.indexOf("A") < i.indexOf("B") && i.indexOf("A") < i.indexOf("D")) {
//       if (i.indexOf("B") < i.indexOf("D")) {
//         answer.push("가능");
//       } else {
//         answer.push("불가능");
//       }
//     }
//   } else if (!i.includes("A")) {
//     if (i.includes("B")) {
//       if (i.indexOf("B") < i.indexOf("D")) {
//         answer.push("가능");
//       } else {
//         answer.push("불가능");
//       }
//     }
//   }
// }
// ...

// console.log(answer);

/**
 * solution)
 * 1. 블록 순서 체크하기
 * 블록 순서 체크
 * 1) 규칙에 포함된 문자들만 비교
 * 2) 포함된 이전 문자의 규칙에서의 index와 현재 문자의 규칙에서의 index 비교
 * 3) 현재 문자의 규칙 index가 이전 것보다 작다 -> 순서가 뒤바뀐 것으로 false 리턴
 */
function solution(block, rules) {
  let answer = [];
  for (let part of block) {
    answer.push(check(part, rules));
  }
  return answer;
}

function check(part, rules) {
  let temp = rules.indexOf(rules[0]);
  for (let str of part) {
    if (rules.includes(str)) {
      if (temp > rules.indexOf(str)) {
        return "불가능";
      }
      temp = rules.indexOf(str);
    }
  }
  return "가능";
}

const block = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "AEBFDGCH"];
const rules = "ABCD";

console.log(solution(block, rules));
