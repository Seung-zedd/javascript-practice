function print() {
    // let: 블록 스코프를 가짐
    // var: for 스코프가 아니라 함수 스코프를 갖는 키워드
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    console.log(i);
}

print();

// let은 변수를 중복선언 할 수 없지만, 코드량이 많아질수록 코드의 신뢰성이 높아짐
// let num = 10;
// let num = 100;

// 반면에 var은 변수 중복선언이 가능하지만, 변수가 어떻게 쓰이는지 추적하기가 힘들어서 ES6 이후에는 let, const만 쓰인다고 함 
var _num = 20;
var _num = 200;
