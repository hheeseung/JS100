/**
 * 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고,
 * 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
 *
 * 두 개를 합쳐 학생 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.
 */
const studentName = prompt(
  "두 학생 이름을 공백으로 구분해 입력해주세요."
).split(" ");
const mathScore = prompt(
  "두 학생의 수학 점수를 공백으로 구분해 입력해주세요."
).split(" ");

const studentObj = {};
for (let i = 0; i < 2; i++) {
  studentObj[studentName[i]] = parseInt(mathScore[i]);
}

console.log(studentObj);
