'use strict'

const items = document.querySelector('.items');
const form = document.querySelector('.addItem')
const inputText = document.querySelector('.addText');
const inputNum = document.querySelector('.addNum');
const addBtn = document.querySelector('.addBtn');


form.addEventListener('submit', event => {
    event.preventDefault();
    onAdd();
})



function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = inputText.value;
    if (text === '') {
        inputText.focus();
        return;
    }
    //console.log(text);
    // // 2. 새로운 아이템을 만듦 (텍스트 + 삭제 버튼)
    const item = createItem(text);
    
    // // 3. items 컨테이너안에 새로 만든 아이템을 추가한다. 
    items.appendChild(item);

    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'});
    // 5. input 을 초기화한다. 
    inputText.value = '';
    inputText.focus();
}

let id = 0; //UUID
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
    <div class="item">
        <div class="item__name ">${text}</div> 
        <div class="icons">
            <button class="iconcircle check" data-id= ${id}><i class="fas fa-check" data-id= ${id}></i></button>
            <button class="iconcircle bin" data-id= ${id}><i class="fas fa-trash" data-id= ${id}></i></button>
        </div>
    </div>
    `;
    id++;
    return itemRow;
}


// 버튼 입력하면 제출하는 폼 

// addBtn.addEventListener('click', () => {
//     onAdd();
// });

// // enter누르면 입력됨
// inputText.addEventListener('keydown', (event) => {
//     if(event.isComposing){
//         return;
//     } // 아니면 keyup써도됨 
//     if(event.key === 'Enter') {
//         onAdd();
//     }
// })


// 이벤트위임

items.addEventListener('click', event => {
    const id = event.target.dataset.id;

    if (id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    // console.log('he');
     } //else{
    //     const item = document.createElement('div');
    //     const checkBtn = document.createElement('button');
    //     const itemName = document.createElement('div');

    //     item.classList.toggle('item_Done');
    //     checkBtn.classList.toggle('iconcircle_Done');
    //     itemName.classList.toggle('item__name_Done');

    //     let checkClass = checkBtn.classList.contains('iconcircle_Done');
    //     if (checkClass  == true){
    //         checkBtn.innerHTML= '<i class="fas fa-check checkIcon_Done"></i>';
    //     } else {
    //         checkBtn.innerHTML = '<i class="fas fa-check "></i>';
    //     };
       
    // }

});


