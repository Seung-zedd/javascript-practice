//? innerHTML = HTML 태그를 해석하고 실행 → 👿"악성 코드"도 실행됨
//? textContent = 모든 것을 단순 텍스트로 처리 →  ✅스크립트가 실행 안 됨


let $age = document.getElementById('age');
$age.textContent = '5살';

console.log($age);

let $color = document.getElementById('color');
$color.style.color = 'blue';
$color.style.fontSize = '30px';




