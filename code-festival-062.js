/**
 * 20190923을 출력합니다. 아래 기준만 만족하면 됩니다.
 *
 * 1. 코드 내에 숫자가 없어야 합니다.
 * 예) console.log(20190923)이라고 하시면 안됩니다.
 * 2. 파일 이름이나 경로를 사용해서는 안됩니다.
 * 3. 시간, 날짜 함수를 사용해서는 안됩니다.
 * 4. 에러 번호 출력을 이용해서는 안됩니다.
 * 5. input을 이용해서는 안됩니다.
 */

// match()함수의 활용 - 특정 텍스트 안에서 찾고자 하는 문자, 문자열, 정규식 등이 있는지 확인하는 함수
// 0으로 표현되는 것들은 Number로 형변환을 해준다
const s = "aacdddddddddfffffffffgghhh";

console.log(
  `${s.match(/a/g).length}${Number(s.match(/b/g))}${s.match(/c/g).length}${
    s.match(/d/g).length
  }${Number(s.match(/e/g))}${s.match(/f/g).length}${s.match(/g/g).length}${
    s.match(/h/g).length
  }`
);
