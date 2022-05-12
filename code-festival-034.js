/**
 * 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다.
 * 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한번에 확인하고 싶어한다.
 *
 * 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
 * (키는 공백으로 구분하여 입력됩니다.)
 */

// ❗ hint: sort()를 활용, 하나의 문자열로 보고 비교한다.
const height = prompt("키를 입력해주세요.");
let sortedHeight = "";

sortedHeight = height.split(" ").sort().join(" ");

if (height === sortedHeight) {
  console.log("YES");
} else {
  console.log("NO");
}
