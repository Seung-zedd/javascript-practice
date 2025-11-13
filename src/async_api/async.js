// 기본적인 순서는 동기
// const workA = () => {
//   console.log("workA");
// };

// const workB = () => {
//   console.log("workB");
// };

// const workC = () => {
//   console.log("workC");
// };

// workA();
// workB();
// workC();

// 비동기 방법 1: setTimeOut
const work = (callback) => {
  setTimeout(() => {
    console.log("비동기");
    callback(); // work의 인자를 callback 함수로 전달해서 비동기 -> 종료 순으로 출력
  }, 3000);
};

work(() => {
  console.log("종료");
});

const workA = () => {
  setTimeout(() => {
    console.log("workA");
  }, 5000);
};

const workB = () => {
  setTimeout(() => {
    console.log("workB");
  }, 3000);
};

const workC = () => {
  setTimeout(() => {
    console.log("workC");
  }, 10000);
};

const workD = () => {
  console.log("workD");
};

workA();
workB();
workC();
workD();
