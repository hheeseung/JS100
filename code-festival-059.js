/**
 * 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고,
 * 나머지 빈 부분에는 '='을 채워 넣어주세요.
 */
const empty = "=";
let front, back;

function setCenter(s) {
  const sLength = 50 - s.length;
  front = empty.repeat(Math.floor(sLength / 2));
  back = empty.repeat(Math.round(sLength / 2));
  return front.concat(s).concat(back);
}

let string = prompt("문자를 입력해주세요.");
console.log(setCenter(string));

// padStart, padEnd를 쓰면 코드가 훨씬 간단해진다.
