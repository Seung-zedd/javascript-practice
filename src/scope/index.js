// 전역, 지역

let globalNum = 100;

function testFunc() {
    let innerNum = 50;
    console.log(globalNum);
    console.log(innerNum);
    
    
}
testFunc();
console.log(globalNum);
console.log(innerNum); // Error!

