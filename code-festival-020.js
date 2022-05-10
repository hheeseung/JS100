/**
 * 공백으로 구분하여 두 숫자가 주어집니다.
 * 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
 */
const numbers = prompt("공백으로 두 숫자를 구분해 입력해주세요.").split(" ");
const result = Math.floor(numbers[0] / numbers[1]);
const rest = numbers[0] % numbers[1];
console.log(result, rest);
