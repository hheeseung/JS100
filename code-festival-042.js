/**
 * 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
 * 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
 * 요일의 이름은 일요일~토요일까지 각각 SUN, MON, ... SAT 입니다.
 *
 * 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"을 반환하세요.
 *
 * 제한조건)
 * 2020년은 윤년입니다.
 * 2020년 a월 b일은 실제로 있는 날입니다.
 * (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
 */
const month = prompt("Month");
const date = prompt("Date");

// ❗ hint: getDay()는 일~토까지 0~6의 숫자를 반환한다.
function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const today = new Date("2020-" + a + "-" + b);
  return day[today.getDay()];
}

console.log(solution(month, date));
