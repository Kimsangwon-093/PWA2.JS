// 타이머 함수: 일정 시간이 지난 후 작업 실행하는 함수 
const timeoutNum1 = setTimeout(()=>{
  console.log('2초');
},2000);
const timeoutNum2 = setTimeout(()=>{
  console.log('1초');
},1000);
const timeoutNum3 = setTimeout(()=>{
  console.log('3초');
},3000);
// console.log('콘솔');

// setTimeout 취소 -------- 가장 기초적인 비동기 처리
// clearTimeout(timeoutNum1);

// 일정 시간마다 반복해서 실행하는 함수
const intervalId1 = setInterval(()=>{
  console.log('인터벌 3초');
},3000);

// setInterval() 제거
setInterval(intervalId1);