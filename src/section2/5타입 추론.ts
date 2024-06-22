/**
 * 타입 추론
 * - 변수의 초기값을 가지고 타입 추론을 한다.
 * - 함수의 반환값 타입을 추론할 때는 초기화하는 값이 아니라 리턴문 다음에 오는 반환값을 가지고 추론한다.
 * - 만약에 매개변수에 기본값이 설정되어 있다면 기본값이 설정된 매개변수의 타입도 기본값을 기준으로 타입을 추론한다.
 * - 딱봐도 우리가 봐도 타입이 추론되면 당연히 TS도 타입 추론 똑같이 함
 */
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterload",
  },
  urls: ["https://winterload.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// 아래와 같이 타입이 계속 변하는 것을 : any 타입의 진화라고 부름
// 우리가 생각하는 것과 다르게 타입 추론 하는경우
let d; // 초기값 안주면 any 타입으로 추론됨, 암묵적 any 타입 (은 진화를 하게 됨), 명시적으로 :any 타입을 지정하면 또 다름 아래 전부 다 any 타입인거임
// 이러한 암묵적 any 타입은 비추천함
d = 10; // 이번에 이렇게 숫자값을 넣어주면 다음라인에서 d를 쓰면 number타입으로 추론됨
d.toFixed(); // number타입 메서드 사용가능
// d.toUppercase(); string타입 메서드 사용 불가능
d = "hello"; // 또 이렇게 문자열 할당하는거는 오류 없음, 이렇게 할당하면 다음라인 d는 string으로 변함
d.toUpperCase();
// d.toFixed();

// let에서는 number 타입으로 추론됬었는데 const에서는 10 number literal 타입으로 추론됨
const num = 10;
const str = "hello";


let arr = [1, "hello"];

// 이렇게 const 말고 let을 사용해 number를 추론하는게 더 다양한 숫자를 쓸 수 있음
// 이런걸 : 타입 넓히기 라고 함
// 따라서 const로 선언된 상수가 아니라면 let과 같이 타입을 넓혀서 좀 더 범용적으로 변수를 사용할 수 있도록 타입 넓히기를 통해 타입을 잘 추론해준다.
