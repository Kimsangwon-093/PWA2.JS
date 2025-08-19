// 산술 연산자
// let num1 = 5;
// let num2 = 10;

// console.log(num1 + num2); // 더하기
// console.log(num2 - num1); // 빼 기
// console.log(num1 * num2); // 곱하기
// console.log(num1 / num2); // 나누기
// console.log(num1 % num2); // 나머지

// // 문자열 연결 연산자(concat)
// let firstName = '길동';
// let lastName = '홍';

// console.log(firstName + lastName);
// console.log(lastName);
// console.log(lastName.concat(firstName));

// //산술 대입연산자
// let num3 = 0; 
// // num3 = num3 + num1;
// num3 += num1;
// num3 -= num1;
// num3 *= num1;
// num3 /= num1;
// num3 %= num1;

// console.log(num3 -= num1);

// //(전위/후위)증감 연산자 --:하나씩 감소 ++:하나씩 증가
// let num4 = 0;
// num4++;
// console.log(num4--);

// //비교 연산자
// let num5 = 1;
// let num6 = 2;
// console.log(num5 > num6);
// console.log(num5 < num6);
// console.log(num5 >= num6);
// console.log(num5 <= num6);

//논리 연산자
console.log(1 === 1) && (1 === 0);
console.log(1 === 1) || (1 === 0);
console.log(!(1 === 1));

//삼항 연산자
let rank = 2;
let result = rank >= 2? '통과':'거부';
console.log(result);