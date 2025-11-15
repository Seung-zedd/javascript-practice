// // 자식 노드를 생성했지만, DOM Tree에 노드가 추가되지는 않음
// let $type = document.createElement('div');
// $type.className = 'info-item';
// $type.id = 'type';
// let $typeText = document.createTextNode('말티즈');


// let $animalInfo = document.querySelector('div.animal-info')
// $animalInfo.appendChild($type); // animal-info 부모 노드에 이전에 생성한 자식 노드를 추가
// $type.appendChild($typeText); // $type 요소 노드의 자식 노드인 텍스트 노드
// console.log($type);

let $button = document.createElement('button');
$button.id = 'new-button';
$button.classList.add('new-button');
$button.textContent = '버튼';
$button.addEventListener("click", () => {
    window.alert('클릭');
})

let $animalInfo = document.querySelector('div.animal-info');
$animalInfo.appendChild($button);

console.log($animalInfo);



