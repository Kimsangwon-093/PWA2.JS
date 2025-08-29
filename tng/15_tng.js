// 1. 현재시각
// 2. 타이머

nowTimeIntoElement('#nowTime');
/**
 * selector로 선택한 요소의 textContent에 현재시간 삽입
 * @param {String} selector 
 */
function nowTimeIntoElement(selector){
const element = document.querySelector(selector);
element.textContent = generateNowTimeFormat();
}

/**
 *현재시간을 `오전 HH:mi:SS` 형식으로 반환 
 * @returns {String}
 */
function generateNowTimeFormat(){
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = '';
  if(hours < 12){
    ampm = '오전';
  }else{
    ampm = '오후';
    hours -= 12;
  }
  return timeFormat = `${ampm} ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}
function generateNowTimeFormatUntilMiliseconds(){
  function generateNowTimeFormat(){
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();
  let ampm = '';
  if(hours < 12){
    ampm = '오전';
  }else{
    ampm = '오후';
    hours -= 12;
  }
  return`${ampm}`
       +`${hours.toString().padStart(2,'0')}:`
       +`${minutes.toString().padStart(2,'0')}:`
       +`${seconds.toString().padStart(2,'0')}`;
  }
}
/**현재시간을 `오전 hh:mm:SS,sss` 형식으로 변환
 * @returns
 */

let intervalNowTime = setInterval(() => {
  const nowTime = document.querySelector('#nowTime');
  nowTime.textContent = generateNowTimeFormat();
},1000);
// ▲ 인터벌로 시간을 흐르게 만듦



const btnStop = document.querySelector('#btnStop');
btnStop.addEventListener('click',()=>{
  clearInterval(intervalNowTime);
});
// ▲ 멈춰 버튼 처리



const btnReStart = document.querySelector('#btnReStart');
btnReStart.addEventListener('click',() => {
  nowTimeIntoElement('#nowTime');
  intervalNowTime = setInterval(()=>{
    nowTimeIntoElement('#nowTime');
  },1000);
});
  // ▲ 재시작 버튼 처리



  const btnReport = document.querySelector('#btnReport');
  btnReport.addEventListener('click',()=>{
  const container = document.querySelector('.reportContainer');
  const newP = document.createElement('p');
  newP.textContent = generateNowTimeFormat();
  container.appendChild(newP);
  });
  // ▲ 기록 버튼 처리



  const btnReportReset = document.querySelector("#btnReportRest");
  btnReportReset.addEventListener('click',()=>{
    document.querySelector(".reportContainer").textContent = '';
  });
  // ▲ 기록 초기화

  // ---------이하함수------------ //

  /**
 * selector로 선택한 요소의 textContent에 현재시간 삽입
 * @param {String} selector 
 */
function nowTimeIntoElement(selector){
const element = document.querySelector(selector);
element.textContent = generateNowTimeFormat();
}

/**
 *현재시간을 `오전 HH:mi:SS` 형식으로 반환 
 * @returns {String}
 */
function generateNowTimeFormat(){
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = '';
  if(hours < 12){
    ampm = '오전';
  }else{
    ampm = '오후';
    hours -= 12;
  }
  return timeFormat = `${ampm} ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}
function generateNowTimeFormatUntilMiliseconds(){
  function generateNowTimeFormat(){
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();
  let ampm = '';
  if(hours < 12){
    ampm = '오전';
  }else{
    ampm = '오후';
    hours -= 12;
  }
  return`${ampm}`
       +`${hours.toString().padStart(2,'0')}:`
       +`${minutes.toString().padStart(2,'0')}:`
       +`${seconds.toString().padStart(2,'0')}`;
  }
}