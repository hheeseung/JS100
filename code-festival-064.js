/**
 * 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
 * 화물은 7kg, 3kg 두가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.
 * 예를 들어 정량이 24kg라면 3kg 8개를 옮기는 것보다는 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.
 *
 * 입력: 정량 N이 입력됩니다.
 * 출력: 가장 적게 옮길 수 있는 횟수를 출력합니다.
 * 만약 어떻게 해도 정량 N이 되지 않는다면, -1을 출력합니다.
 */

/**
 * 내가 한 풀이
 * 무게가 무거운 것부터 나눠야 횟수가 덜하기 때문에 7로 나눈 나머지 무게에 대해서 3으로 나눈 값이 딱 맞아 떨어지지 않으면 -1을 반환하도록 함.
 * 이랬더니 나를 수 있는 무게들마저 횟수가 -1이 떠서 뭔가 이상하다고 느낌.
 */
const N = parseInt(prompt("정량을 입력해주세요."));
let count = 0;

function countLess(weight) {
  count = parseInt(weight / 7);
  if ((N % 7) % 3 !== 0) {
    return -1;
  } else {
    count += parseInt((weight % 7) / 3);
  }
  return count;
}
console.log(countLess(N));

/**
 * 답안지 풀이
 * 화물이 7로 나누어 떨어지지 않으면 3kg씩을 먼저 나르도록 계산함
 * 의문점) 적게 나르는 횟수를 구해야 하는게 아닌가...?
 * 25kg의 경우는 7kg*3번 + 3kg*2번이 더 횟수가 적게 나오지 않나... 꼭 할당된 화물 무게만큼만 옮겨야 하나? 더 적은 것을 옮길 수는 없나?
 */
let n = parseInt(prompt("정량을 입력하세요"), 10);
let result = 0;

while (true) {
  if (n % 7 === 0) {
    result += parseInt(n / 7, 10);
    console.log(result);
    break;
  }
  n -= 3;
  result += 1;
  if (n < 0) {
    console.log(-1);
    break;
  }
}
