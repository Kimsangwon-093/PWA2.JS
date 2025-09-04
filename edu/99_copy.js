const user = {
  name:'Hong',
  age: 20,
  friends:{
    id: 90
  }
};

// 얇은 복사: 최상위 계층의 요소만 독립적으로 복사, 
//          그 외 계층은 참조형태로 복사
const shallowCopy = {...user};
shallowCopy.friends = {test: 'ttt'};
console.log(user, shallowCopy);

// 딥카피 : 모든 계층의 요소를 독립적으로 복사
const jsonCopy = JSON.parse(JSON.stringify(user));
jsonCopy.friends.id = 200;
console.log(user);

// Node.js 17 + 또는 브라우저 최신 환경
const cloneCopy = structuredClone(user);
console.log(user);

// ---------------------
// Distructure 문법
// ---------------------

const arr = ['hong', 20];

const [name2] = arr;
const [ ,age2] = arr;

const user2 = {
  name:'Hong',
  age: 20,
  friends:{
    id: 90
  }
};

const {name, friends} = user2;
console.log(name, friends);