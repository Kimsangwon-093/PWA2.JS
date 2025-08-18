// 01.변수: 변하는 데이터를 저장하는 공간
var var1='제육';
let let1='햄버거'; 
var var2;
var2=0; // ← 우측에 있는 값을 왼쪽에 대입 하겠다. 

// 02.상수:최초의 데이터 값이 절대 변하지 않는 공간
const CONST1 = '뚝불';
// const1 = 'adaf';

//※ var 를 지양 하여야 하는 이유:
// .중복선언이 가능하다
var name='홍길동';
var name='갑돌이';

// let name2='둘리';
// let name2='도우너';

// 호이스팅(Hoisting): 작성한 코드상 선언보다 사용을 먼저 할경우, 
// 오류가 발생하지 않고, 접근 가능한 현상 
console.log(age);
var age=20;

// .var는 함수 레벨 스코프를 날린다. 
// 스코프(Scope): 
// 스코프의 종류:전역 스코프, 지역 스코프, 블록레벨 스코프
// var globalVar = 'globalVar';
// let globalLet = 'globalLet';
// const globalConst ='globalConst';

// function test() {
//   var localVar = 'localVar';
//   let localLet = 'localLet';
//   const localConst ='localConst';
//   console.log(globalVar);
//   console.log(globalLet);
//   console.log(globalConst);

//   console.log(localVar);
//   console.log(localLet);
//   console.log(localConst);
// }

// test();

// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// console.log(localVar);
// console.log(localLet);
// console.log(localConst);

// var는 블럭레벨 스코프를 가지고 있다
if(true){
  var blockVar = 'blockVar';
  let blockLet = 'blockLet';
  const blockConst = 'blockConst';
}

console.log(blockVar);
console.log(blockLet);
console.log(blockConst);
