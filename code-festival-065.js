/**
 * a = [1,2,3,4]
 * b = [a,b,c,d]
 * 이런 리스트가 있을 때 [[1,a], [2,b], [3,c], [4,d]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
 */

// 내가 한 풀이 - for 반복문을 활용
const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];
let arr = [];

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (i === j) {
      arr[i] = [a[i], b[j]];
      if (i % 2 !== 0) {
        arr[i] = [b[j], a[i]];
      }
    } else {
      continue;
    }
  }
}
console.log(arr);
