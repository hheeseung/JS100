/**
 * 학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 버스 시간표는 너무 복잡해서 버스 도착
 * 시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.
 * 버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어 주세요.
 * - 버스 시간표와 현재 시간이 입력으로 주어집니다.
 * - 출력 포맷은 "00시 00분"입니다. 만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
 * - 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다." 라고 출력합니다.
 */
const busTable = ["12:30", "13:20", "14:13"].map((item) => item.split(":"));
const now = "12:40".split(":");
let output = [];

function arriveBus(timeTable, curr) {
  let hours = 0;
  let minutes = 0;
  for (let i in timeTable) {
    if (timeTable[i][0] < curr[0]) {
      output.push("지나갔습니다");
    } else if (timeTable[i][0] === curr[0]) {
      if (timeTable[i][1] < curr[1]) {
        output.push("지나갔습니다");
      } else {
        hours = parseInt(timeTable[i][0]) - parseInt(curr[0]);
        minutes = parseInt(timeTable[i][1]) + 60 - parseInt(curr[1]);
        output.push(
          `${String(hours).padStart(2, "0")}시간 ${String(minutes).padStart(
            2,
            "0"
          )}분`
        );
      }
    } else {
      hours = parseInt(timeTable[i][0]) - 1 - parseInt(curr[0]);
      minutes = parseInt(timeTable[i][1]) + 60 - parseInt(curr[1]);
      output.push(
        `${String(hours).padStart(2, "0")}시간 ${String(minutes).padStart(
          2,
          "0"
        )}분`
      );
    }
  }
  return output;
}

console.log(arriveBus(busTable, now));

// 코드가 지저분하다. 리팩토링이 필요한 것 같다.
