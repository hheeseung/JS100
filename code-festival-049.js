/**
 * 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
 *
 * 입력: 10 9 8 7 6 5 4 3 2 1
 * 출력: 10
 */
const numbers = prompt("숫자를 입력하세요.").split(" ");
let max = 0;

for (let i in numbers) {
  numbers[i] = parseInt(numbers[i]);
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max);
