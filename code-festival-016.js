/**
 * 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어봅시다.
 */
let sentence = prompt("문장을 입력해주세요.");
sentence.split("");
let reverseSentence = [];
for (let i = 0; i < sentence.length; i++) {
  reverseSentence.unshift(sentence[i]);
}

console.log(reverseSentence.toString().replace(/\,/g, ""));
