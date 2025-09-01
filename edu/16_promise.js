// 비동기처리 → 동기처리로 만드는 법
// ※ callback Hell → 콜백 지우기

// setTimeout(() => {
// console.log('A');
// setTimeout(() => {
// console.log('B');
//  }, 2000);
// }, 3000);
// setTimeout(()=>{
// console.log('C');
// },1000);

//-----< Promise 객체 >------//
// 비동기 처리의 결과를 제공하겠다는 약속을 반환
// (단, 비동기의 처리가 끝날때 까지 결과를 기다리는 것은 아니다.)
// 비동기 처리는 한 개 단위로 처리한다.
function pro1(str, ms){
  return new Promise((resolve, reject) => {       // (resolve, reject) <------파라미터가 고정되어 있다.
    setTimeout(()=>{
      if(str === 'A' || str === 'B' || str === 'C'){
        console.log(str);
        resolve();
      }else{
        reject();
      }
    },ms);
  });
}

pro1('D', 500).then(()=>{
  console.log('Then');
}) // .then() : 작업이 성공 했을 때, then() 메소드의 콜백 함수를 실행

.catch(()=>{
  console.log('Catch');
}) // .catch() : 작업이 실패 했을 때, catch() 실행

.finally(()=>{
  console.log('Finally');
}); // .finally() : 성공 실패 여부를 상관 없이 무조건 실행 (제일 마지막에 작성)
    // pro1의 결과 값을 then, catch, finally 파라미터에

pro1('A', 3000)
.then(()=>{
  pro1('B', 2000)
  .then(()=>{
  pro1('C', 1000)
  .then()
  .catch();
})
.catch();
})
.catch();
// 1.resolve:성공여부에 따라 다르게 작동하는 파라미터
//   성공: return
//   실패: reject