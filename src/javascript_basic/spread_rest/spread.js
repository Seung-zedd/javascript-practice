// spread: 객체나 배열에서 중복된 부분을 퍼트릴 때, 혹은 함수를 호출 할 때 인수로 전달할 값들을 퍼트릴 때 사용
const toy = {
  type: "bear",
  price: 15000,
};

const blueToy = {
  ...toy,
  color: "blue",
};

const yellowToy = {
  ...toy,
  color: "yellow",
};

console.log(blueToy);
console.log(yellowToy);

const color1 = ["red", "orange", "yellow"];
const color2 = ["blue", "navy", "purple"];

const rainbow = [...color1, "green", ...color2];

console.log(rainbow);

