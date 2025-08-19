// if문(조건문): 
// 조건에 따라서 서로 다른 처리를 하는 문법(분기문)
// 조건이 참이면 해당 처리를 진행하고, 거짓이면 다음 처리를 이어감
// let rank = 5;

// if(rank === 1){
//   console.log('1등 입니다.');
// }else if(rank === 2){
//   console.log('2등 입니다.');
// }else if(rank === 3){
//   console.log('3등 입니다.');
// }else{
//   if(rank === 5 || rank === 7){
//     console.log('특별상 입니다.');
//   }else{
//     console.log('등 수 외입니다.');
//   }
// }

// if(rank === 1){
//   console.log('챔피언');
// }

// let anwser1 = 2;
// let anwser2 = 3;

// if(anwser1 === 2 && anwser2 === 5){
//   score = 100;
// }else if(anwser1 === 2 || anwser2 === 5){
//   score = 50;
// }console.log(score + '점');

let anwser1 = 1;
let anwser2 = 5;
let score = 0;

if(anwser1 === 2){
  score += 50;
}if(anwser2 === 5){
  score += 50;
}

console.log(score + '점');

