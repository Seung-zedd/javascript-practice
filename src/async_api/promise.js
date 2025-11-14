const executor = (res, rej) => {
  setTimeout(() => {
    res("성공");
    rej("실패");
  }, 3000);
};

// Promise의 3가지 상태:

//   Pending (대기)    → 🟡 노란불 (준비 중)
//   Fulfilled (성공)  → 🟢 초록불 (.then 실행)
//   Rejected (실패)   → 🔴 빨간불 (.catch 실행)

const promise = new Promise(executor);
promise
  // 작업이 성공했을 때 호출되는 resolve 함수에 전달된 값
  //* then: 사용자가 정한 시간(ms 단위) 후 resolve될 때까지 대기(반환한 객체는 Pending 대기 상태), 참고로 동기로 핸들러 등록만 하는 상태임
  .then((result) => {
    console.log(result);
  })
  // 작업이 실패했을 때 호출되는 reject 함수에 전달된 값으로 에러를 핸들링할 수 있음
  //? 논블로킹은 주로 I/O 작업의 처리 방식을 설명할 때 사용
  .catch((error) => {
    console.log(error);
  });

const workA = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });
  return promise;
};

const workB = (value) => {
  const promise = new Promise((resolve) => {
    // ← 2. Promise 생성: 동기 ✅
    setTimeout(() => {
      // ← 3. 타이머 등록: 동기 ✅
      resolve(value - 3); // ← 5. resolve 실행: 비동기 ✅
    }, 3000);
  });
  return promise; // Pending Promise 반환: 동기 ✅
};
// 여기까지 모두 동기적으로 즉시 실행!

const workC = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });
  return promise;
};

//? 왜 log가 출력될 때 setTimeOut()이 실행되지? -> then 핸들러 주석 부분을 보면 이해 가능!
workA(10).then((resA) => {
  console.log(`workA: ${resA}`); // 15
  // 리턴한 프로미스 객체를 resA(value는 15)에 전달 후 workB의 파라미터로 전달
  // ← 1. 함수 호출: 동기 ✅
  workB(resA).then((resB) => {
    // ← 4. 핸들러 등록: 동기 ✅ (실행은 나중에)
    console.log(`workB: ${resB}`); // 12
    // 마찬가지로 리턴한 프로미스 객체를 resB(value는 12)에 전달 후 workC의 파라미터로 전달
    //* 마찬가지로, workC(resB)는 즉시 호출(동기)
    workC(resB).then((resC) => {
      console.log(`workC: ${resC}`); // 22
    });
  });
});

// 정리: 
// - Promise 체이닝 = 비동기(논블로킹, 즉 다른 작업이 가능) + 순차 실행
// - 동기처럼 순서 보장하면서도 성능 저하 없음