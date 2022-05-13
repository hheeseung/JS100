/**
 * 새 학기를 맞아 호준이네 반은 반장선거를 하기로 했습니다.
 * 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은
 * 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를
 * 출력하는 프로그램을 작성하기로 하였습니다.
 */

// 1. 후보들의 표를 모두 받아서 각 이름들을 배열로 받는다.
const votes = prompt("후보들을 입력해주세요.").split(" ");

// 2. 결과를 reduce()를 통해서 객체로 만든다. (이름: 득표수)
const result = votes.reduce((prev, curr) => {
  prev[curr] = (prev[curr] || 0) + 1;
  return prev;
}, {});

// ⭐⭐⭐ 만든 결과값 객체에 대한 최종 선발자를 reduce()를 통해서 나타낼 수 있다.
const winner = Object.keys(result).reduce((i, j) =>
  result[i] > result[j] ? i : j
);
console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);

// 참고해서 짠 코드인데 많이 어려웠다. reduce()는 처음 들어본다... 공부를 깊이 해봐야겠다.
