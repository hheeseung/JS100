/**
 * 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
 * 정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.
 * 숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.
 * 예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.
 */
let number = prompt("숫자를 입력해주세요.").split("");
number = number.reverse();

for (let i = 0; i < number.length; i++) {
  if ((i + 1) % 4 === 0) {
    number.splice(i, 0, ",");
  }
}
number = number.reverse().join("");

console.log(number);

// 내장함수면 단숨에 끝날 것들이 생각보다 많은 것 같다. 내장함수를 잘 쓰자!
