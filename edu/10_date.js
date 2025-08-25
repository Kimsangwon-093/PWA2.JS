// Date 객체
// 로컬 타임존에 따른 유닉스 타임스탬프 기반으로 동작

// Date 인스턴스 
const now = new Date();

const date1 = new Date('1990-02-23 14:30:00');
const date2 = new Date(1980, 10, 10, 23, 0, 1);
const date3 = new Date(48948654652);

// getFullYear(): 연도 획득
// getMonth(): 월 획득(주의:0 ~ 11로 반환)
// getDate(): 일 획득
// getHours(): 시를 반환
// getMinute(): 분을 반환
// getSeconds(): 초를 반환
// getMilliseconds(): 밀리 초를 반환
// getDay(): 요일을 반환(**주의** 0 ~ 6 반환, 0 = 일요일)
const nowYear = now.getFullYear();
console.log(nowYear);

const nowMonth = now.getMonth() + 1;
console.log(nowMonth);

const nowDate = now.getDate();
console.log(nowDate);

const nowHours = now.getHours();
console.log(nowHours);

const nowHMinutes = now.getMinutes();
console.log(nowHMinutes);

const nowSeconds = now.getSeconds();
console.log(nowSeconds);

const nowMilliseconds = now.getMilliseconds();
console.log(nowMilliseconds);

const nowDay = now.getDay();
console.log(nowDay);


now.getFullYear();
console.log(date1);
console.log(date2);
console.log(date3);






// 요일 한글로 변환

let koreanDay = '';

switch(nowDay){
  case 0:
    koreanDay = '일요일';
    break;
    
  case 1:
    koreanDay = '월요일';
    break;
      
  case 2:
    koreanDay = '화요일';
    break;
        
  case 3:
    koreanDay = '수요일';
    break;
          
  case 4:
    koreanDay = '목요일';
    break;
            
  case 5:
    koreanDay = '금요일';
    break;
              
  case 6:
    koreanDay = '토요일';
    break;
   }
              
console.log(`${nowYear}년 ${nowMonth}월 ${nowDate}일 ${ nowHours +':'+ nowHMinutes +':'+ nowSeconds} ${koreanDay}`);

// padStart, padEnd 를 사용해서 자릿수 변경하기
// const nowFormat = `${nowYear}년 ${nowMonth.toString().padStart(2, '0')}월 ${nowDay}일 ${nowHours}:${nowMinutes}:${nowSeconds} ${koreanDay}`;
// ㄴpadStart(2, '0') = 해당 문자열을 두자릿수로 만드는데 앞자리가 빈다면 ' '안에 적힌 걸로 채워줘란 뜻.
function lpad(origin, length, fillStr) {
  // origin의 타입 체크 필요. 숫자면 바꿔줘야 하고 문자면 쓰면 되기 때문.
  if(typeof(origin) === 'number') {
    origin = origin.toString();
  }
  return origin.padStart(length, fillStr);
}
const nowFormat = `${nowYear}년 ${lpad(nowMonth, 2, '0')}월 ${lpad(nowDay, 2, '0')}일 ${nowHours}:${lpad(nowHMinutes, 2, '0')}:${lpad(nowSeconds, 2, '0')} ${koreanDay}`;
console.log(nowFormat);

// 두 날짜의 차를 구하는 법
const targetDate = new Date('2025-03-13 18:10:00');
const diff = Math.floor(Math.abs(targetDate - now) / (1000 * 60 * 60 * 24));
// 일 단위를 1000 * 60 * 60 * 24 
console.log(diff);



