/**
 * 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
 * 입력: aaabbbbcdddd
 * 출력: a3b4c1d4
 */
let s = prompt("문자열을 입력해주세요.").split("");
s = s.reduce((prev, curr) => {
  prev[curr] = (prev[curr] || 0) + 1;
  return prev;
}, {});

let result = [];

function countDuplication(object) {
  for (const [key, value] of Object.entries(object)) {
    result.push(`${key}${value}`);
  }
  return result.join("");
}

console.log(countDuplication(s));
