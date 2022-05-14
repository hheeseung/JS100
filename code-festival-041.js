/**
 * 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
 * 소수이면 YES로, 아니면 NO로 출력해주세요.
 * (소수: 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수)
 */
const n = prompt("숫자를 입력해주세요.");

function isPrimeNumber(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return "NO";
    }
  }
  return "YES";
}

console.log(isPrimeNumber(n));
