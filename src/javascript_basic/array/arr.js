let arr1 = new Array(1, 2, 3);
let arr2 = new Array(3);

console.log(arr1);
console.log(arr2);

// 배열 리터럴 방식
let _arr1 = [1, 2, 3];
let _arr2 = [3];
console.log(_arr1);
console.log(_arr2);

// 배열 접근, 삭제, 수정
//! 배열은 자료형과 상관없이 모든 데이터를 담을 수 있다.
let array = [1, 'hello', null];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

let fruits = ['apple', 'orange', 'peach'];
fruits.push('banana'); // 맨 뒤에 원소 삽입
fruits.unshift('grape') // 맨 앞에 원소 삽입
console.log(fruits);

