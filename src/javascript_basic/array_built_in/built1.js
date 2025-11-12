let arr = [1, 2, 3, 4, 5];

// 자바의 for-each와 동일
arr.forEach((el, idx, arr) => {
    console.log(`${idx}번째 요소는 ${el}입니다.`);
    console.log(arr);
});

// map: 함수의 mapping과 같음
let newArr = arr.map((el) => {
    return el * 10;
})

console.log(newArr);

// includes: 자바의 contains 메서드
let colors = ["green", "blue", "purple"];
console.log(colors.includes("blue")); 
console.log(colors.includes("yellow"));

// indexOf: 특정 요소의 인덱스를 리턴
// 값이 없으면 -1을 리턴
console.log(colors.indexOf("purple"));




