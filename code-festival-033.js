/**
 * 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
 */
let numbers = prompt("숫자를 여러개 입력하세요.").split(" ");
numbers.forEach((element) => parseInt(element));
console.log(numbers.reverse().join(" "));
