// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
const number = prompt("두 숫자를 공백으로 구분해 입력하세요.").split(" ");
const square = number[0] ** number[1];
console.log(square);
