// switch 문
let food = '스시';
let foodKinds = '';

switch(food){
  case '돈까스':
    foodKinds = '경양식';
    break;

  case '김치찌개':
    foodKinds = '한식';
    break;

  case '스시':
    foodKinds = '일식';
    break;

  default:
    foodKinds = '기타';
    break;
}

console.log(foodKinds);