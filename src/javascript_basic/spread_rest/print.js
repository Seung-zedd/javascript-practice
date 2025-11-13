// const print = (a, b, ...rest) => {
//   console.log(a, b, rest);
// };

// print(1, 2, 3, 4, 5, 6);


// 매개변수들이 일치하므로 간단하게 rest 문법으로 깔끔하게 정리
const print = (...rest) => {
  console.log(rest);
};

const numbers = [1, 2, 3, 4, 5, 6];
print(...numbers); // spread를 사용해서 요소들을 퍼뜨림
