// 콜백 함수: 함수형 프로그래밍 혹은 일급 객체와 유사
/**
 * 일급 객체: 변수에 저장할 수 있고, 파라미터로 전달할 수 있으며, 값을 리턴할 수도 있는 객체를 말함
 */

const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result);
};

const printResult = (result) => console.log("결과: " + result);

const doubleResult = (result) =>
  console.log("결과에 2를 곱한 값: " + result * 2);

calculate(5, 3, printResult);
calculate(5, 3, doubleResult);

// concise callback function
const testFunc = (callback) => callback();

testFunc(() => {
  console.log("콜백 함수 테스트");
});
