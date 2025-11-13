// rest: 객체나 배열에서 특정 부분을 하나의 객체나 배열로 묶어야 할 때 사용
const blueToy = {
    type: 'bear',
    price: 15000,
    color: 'blue'
};

//! 반드시 "구조 분해 할당"과 함께 사용해야 rest 문법이 먹힘
//! A rest element must be last in a destructuring pattern.
// const { type, ...rest } = blueToy;

// console.log(type);
// console.log(rest);


const color = ["red", "orange", 'yellow', 'green'];
const [c1, c2, ...rest] = color;
console.log(c1, c2);
console.log(rest);

