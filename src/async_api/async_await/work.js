const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workA");
    }, 5000);
  });
};
const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workB");
    }, 3000);
  });
};
const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workC");
    }, 10000);
  });
};

// Promise.all: 각 작업을 병렬처럼 실행해서 실행 시간을 단축
//* 하나라도 rejected 상태가 되면 Promise 객체가 즉시 실패 상태가 됨
const start = async () => {
  try {
    let results = await Promise.all([workA(), workB(), workC()]);
    results.forEach((result) => console.log(result));
  } catch (error) {
    console.log(error);
  }
};

start();
