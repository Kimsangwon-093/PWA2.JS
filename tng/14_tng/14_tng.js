const writeBtn = document.querySelector('#writeBtn');
writeBtn.addEventListener('click',() => {                    
  const keywordInput = document.querySelector('#keyword');
  let keyword = keywordInput.value;
// [false | null | undefined | 0 | '']
  if(keywordInput.value.length > 0) {
// Content 요소 생성하기
const newContent = document.createElement('div');
newContent.classList.add('content');
const newP = document.createElement('p');
newP.textContent = keyword;
newContent.appendChild(newP);
newContent.addEventListener('click',(e)=>{
  e.target.classList.toggle('toggle_line_through');
});

// 생성한 요소 추가
const printBox = document.querySelector('.print_box');
printBox.appendChild(newContent);

// 검색어 초기화 하기
keywordInput.value = '';
  }
  return;
});

const keywordInput = document.querySelector('#keyword');
keywordInput.addEventListener('keypress',(e) => {
  console.log(e.key);
  if(e.key === 'Enter'){
  const writeBtn = document.querySelector('#writeBtn');
  writeBtn.click();
  }
});

// e(event): 이벤트의 약자