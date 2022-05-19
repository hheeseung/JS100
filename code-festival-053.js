/**
 * 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')'와 같은 것을 말한다.
 * 그 중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 부르도록 하자.
 * (())와 같은 문자열은 바른 문자열이지만 ()())와 같은 문자열은 바르지 않은 문자열이다.
 * (해당 문제에서는 소괄호만 판별하지만, 중괄호와 대괄호까지 판별해 보세요.)
 * 입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.
 */

/**
 * 입력받은 값을 배열로 받고 그 배열을 돌면서 (, {, [ 가 있다면
 * checkArray에 push, 없다면 checkArray에 (, {, [가 있는지 확인 후
 * 있다면 해당하는 (, {, [를 checkArray에서 pop해준다.
 * 최종적으로 checkArray의 길이가 0이어야 return true가 된다.
 */
function isValid(s) {
  const obj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const openBracket = Object.values(obj);
  let checkArray = [];
  let array = s.split("");
  for (let i in array) {
    if (openBracket.includes(array[i])) {
      checkArray.push(array[i]);
    } else {
      if (checkArray.includes(obj[array[i]])) {
        checkArray.pop(obj[array[i]]);
      } else {
        return false;
      }
    }
  }
  if (checkArray.length) {
    return false;
  } else {
    return true;
  }
}

const input = prompt("괄호 입력");
console.log(isValid(input));
