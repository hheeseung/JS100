/**
 * 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
 *
 * 입력: AAABBBcccddd
 * 출력: aaabbbCCCDDD
 */
let input = prompt("입력").split("");
for (let i in input) {
  if (input[i] === input[i].toUpperCase()) {
    input[i] = input[i].toLowerCase();
  } else {
    input[i] = input[i].toUpperCase();
  }
}

console.log(input.join(""));
