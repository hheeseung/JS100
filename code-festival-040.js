/**
 * 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수
 * 에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.
 *
 * 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해주세요.
 *
 * 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
 * 그 다음 차례대로 탐승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.
 */
const limit = parseInt(prompt("제한 무게"));
const n = parseInt(prompt("인원수"));
let totalWeight = 0;
let ride = 0;

// ❗ hint: i가 증가되는 루프 안에서 돌기 때문에 조건에 맞으면 ride = i
for (let i = 1; i <= n; i++) {
  totalWeight += Math.floor(Math.random() * 100);
  console.log(totalWeight);
  if (totalWeight <= limit) {
    ride = i;
  }
}

console.log(ride);
