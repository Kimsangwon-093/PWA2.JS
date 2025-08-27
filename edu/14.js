// 이벤트
function test(){
  alert('버튼1');
}

// property Listener(프로퍼티 리스너)
// 동일한 이벤트를 여러번 사용 불가
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => {
  alert('버튼2');
}

// addEventListener
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click',()=>{
  alert('버튼3');
});

btn3.addEventListener('click',()=>{
  alert('버튼3');
});
btn3.addEventListener('click',btn3Alert);

//removeEventListener() : 이벤트 제거
btn3.addEventListener('click',btn3Alert);

function btn3Alert(event){
  console.log(event);
  alert('3333333');
}

document.body.addEventListener('scroll', ()=> {
  console.log('scroll test');
});

window.addEventListener('load', () => {
  window.open('https://www.google.com');
});

// ------------------------
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (e) => {
  console.log(e.target.value);
});

// 체크박스에 체인지 이벤트 추가
const chkPw = document.querySelector('#seePw');
chkPw.addEventListener('change', (e) => {
  // 인풋 패스워드 접근
  const pw = document.querySelector('#pw');

  // 체크 여부 확인 분기 
  if(e.target.checked) {
    // 인풋 패스워드 type속성 text로 변경
    pw.setAttribute('type','text');
  }else{
    // 인풋 패스워드 type속성을 password로 변경 
    pw.setAttribute('type','password');
  }
});

