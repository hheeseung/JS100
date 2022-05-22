// 다음 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.
// 출력: England 22023
nationWidth = {
  korea: 220877,
  Russia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const koreaWidth = nationWidth["korea"];
const width = Object.values(nationWidth);
let country;
let area;
let arr = [];

function simillarWidth() {
  for (let i = 0; i < width.length - 1; i++) {
    if (koreaWidth > width[i]) {
      if (koreaWidth - width[i] > koreaWidth - width[i + 1]) {
        area = koreaWidth - width[i + 1];
      }
    } else if (koreaWidth < width[i]) {
      if (width[i] - koreaWidth > width[i + 1] - koreaWidth) {
        area = width[i + 1] - koreaWidth;
      }
    }
    country = Object.keys(nationWidth).find(
      (key) => nationWidth[key] === width[i + 1]
    );
  }
  arr = [country, area];

  return arr.join(" ");
}

console.log(simillarWidth());
