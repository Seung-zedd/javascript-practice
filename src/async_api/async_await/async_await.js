const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3초가 지났습니다.");
    }, ms);
  });
};

// async: 비동기 작업을 처리할 때 사용되는 키워드로, 해당 함수는 "항상 자동으로 프로미스 객체를 반환"
// await: 프로미스가 처리될 때까지 기다리면서, 그동안은 함수의 실행을 중단하는 역할(프로미스 객체가 Pending 상태일 때)
    //* 프로미스 객체의 then 메서드를 사용해서 코드를 작성하는 것 보다 훨씬 더 가독성 좋고 편리하게 작성
    //* 비동기 함수의 실행 순서를 예측할 수 있게 만들어 준다
const start = async () => {
  try {
    let result = await delay(3000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

start();
