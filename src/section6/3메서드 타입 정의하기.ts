/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2,4,6] it은 number타입으로 추론됨 어딘가에 변수가 저장되고 있는거임(cmd+클릭)

// 우리가 map 메서드의 타입을 따로 정의해보려면 map함수 만들고 2개의 매개변수가 필요함
// 어떤 배열에 적용할 것인지, 어떤 함수를 적용할 것인지
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2);

// 조금 아쉬운 부분이 있음
// (it) => it.toUpperCase()이렇게 하면 잘 작동하는데 이 부분을 (it) => parseInt(it) 이렇게 바꾸면 오류나옴
// parseInt는 자바스크립트의 내장함수로 인수로 전달받은 값은 number 타입으로 바꿔서 변환해서 반환하는 함수임
// 이런식으로 map 함수를 호출하면 callback함수의 반환값이 number 타입이되는거임
// 이럴때는 제네릭 변수를 하나만 사용하면 안됨
map(["hi", "hello"], (it) => parseInt(it));

/**
 * forEach 메서드
 * - forEach 메서드는 값을 반환하지 않고 배열의 각요소에 인수로 전달한 콜백함수를 한 번씩 수행하는 메서드임
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => console.log(it.toFixed()));
forEach(["123", "456"], (it) => {
  it;
});

/** 정리
 * 제네릭 함수 이용하면 매개변수의 타입이 뭐가 됐던 타입을 유연하게 잘 정의할 수 있다
 */
