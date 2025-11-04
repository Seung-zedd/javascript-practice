// 생성자 함수, 리터럴
// 생성자 함수 방식은 let obj = new Object();
let obj = {}; // 이게 리터럴 방식
console.log(obj);

// key: value
// 파이썬의 딕셔너리와 비슷
let book = {
    title: '자바스크립트 첫걸음',
    author: '조승제',
    category: '자바스크립트',
    year: undefined,
    color: function() {
        console.log('orange');
    }
}

// 객체 프로퍼티 사용
let car = {
    name: '붕붕',
    model: 'morning',
    color: 'black'
};

const getValue = (key) => {
    console.log(car[key]);
    
}

console.log(car.name);
console.log(car['model']);

getValue('color');

delete car.model;
delete car['color'];

console.log(car.color); // undefined
console.log(car["model"]); // undefined

const person = {
    name: '홍길동',
    age: 23,
    //! 주의: 객체 내부에서 function 대신 arrow function 내부의 this는 global 객체인 window를 가리키기 때문에 객체의 프로퍼티에 접근 불가
    print: function () {
        console.log(`제 이름은 ${this.name}입니다.`);
    }
};

person.print();
person['print']();

