// - 아래 프로그램을 만들어 주세요
// - 사과게임 위에 `장기` 삽입 -------------(V)
// - `어메이징브릭`에 베이지 배경색 추가 ------------(V)
// - 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정
    const ulSelector = document.querySelector('#ul');
    const janggi = document.createElement('li');
    janggi.textContent = '장기';
    const appleGame = document.querySelector('#apple');
    ulSelector.insertBefore(janggi, appleGame);

    
    const AmazingBrick = document.querySelector('ul li:last-child');
    AmazingBrick.style.backgroundColor = 'beige';
    
    const listLi = document.querySelectorAll('#ul li');
    listLi.forEach((node, idx) => {
      if(idx % 2 === 0){
        node.style.color = 'red';
      }else{
        node.style.color = 'blue';
      }
    });

    function changeLiColor() {
    const listLi = document.querySelectorAll('#ul li');
    listLi.forEach((node, idx) => {
      if(idx % 2 === 0) {
      node.style.color = 'blue';
    }else {
      node.style.color = 'red';
     }
    });
  }
changeLiColor();

    

    function changeLicolor(){
      constLi = document.querySelectorAll('#ul');
    }
    
    const newStar = document.querySelector('#ul');
    const starCraft = document.createElement('li');
    starCraft.textContent = '스타';
    ulSelector.insertBefore( starCraft, appleGame);



function changeLiColor() {
    const listLi = document.querySelectorAll('#ul li');
    listLi.forEach((node, idx) => {
      if(idx % 2 === 0) {
      node.style.color = 'blue';
    }else {
      node.style.color = 'red';
     }
    });
  }
changeLiColor();


const result = {
  title: '타이틀',
  content: '내용내용',
  img: 'http://www.admin.com/img/posts/sdasd/png'
}

function addCard(item){
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const newCardImg = document.createElement('div');
    newCard.classList.add('card-img');

    const newCardTitle = document.createElement('p');
    newCardTitle.textContent = '카드타이틀';
    
    const newCardContent = document.createElement('p');
    newCardContent.textContent = '내용내용';

    newCard.appendChild(newCardImg);
    newCard.appendChild(newCardTitle);
    newCard.appendChild(newCardContent);

    document.body.appendChild(newCard);

}


  // 카드 구조 만들기
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const newCardImg = document.createElement('div');
    newCard.classList.add('card-img');

    const newCardTitle = document.createElement('p');
    newCardTitle.textContent = '카드타이틀';
    
    const newCardContent = document.createElement('p');
    newCardContent.textContent = '내용내용';

    newCard.appendChild(newCardImg);
    newCard.appendChild(newCardTitle);
    newCard.appendChild(newCardContent);

    document.body.appendChild(newCard);