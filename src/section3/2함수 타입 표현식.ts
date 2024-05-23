/**
 * 함수 타입 표현식 (function type expression)
 */

// 이렇게 마치 타입별칭을 이용해서 JS의 화살표 함수를 만들듯이 타입을 타입별칭으로 따로 정의를 할 수 있음
// 타입별칭을 이용해 함수의 타입을 별도로 정의하는 문법을 - 함수 타입 표현식 이라 함
// 인터넷에서는 이 문법을 호출 시그니쳐 or 함수 시그니쳐라고 부름
// 엄밀히 말하면 공식 문서에서는 함수 타입 표현식이라고 부르고 있음
type Operation = (a: number, b: number) => number;

// const add = (a: number, b: number): number => a + b;
// 타입 정의하면 아래처럼 간략해짐
// 주의점! 타입별칭으로 맞춘 매개변수 갯수가 달라지거나 타입이 달라지면 안됨
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 * 함수의 타입을 별도로 정의하는 또 다른 문법
 * 호출 시그니쳐 이용해도 앞과 동일하게 함수의 타입을 분리해서 정의 가능
 * 함수 타입 표현식과 동일한 기능을 함
 */

/**
 * 사용법
 * 객체 타입 정의 하듯이 중괄호 열고 그 안에 소괄호열고 여기에 매개변수, 타입 작성 소괄호 뒤에
 * 타입 주석으로 반환값 타입 정의해줌
 */
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// 아래 함수에서 func(a: number): void 여기만 똑 때어서 붙이면 호출 시그니쳐임
function func(a: number): void {}

/**
 * 추가로
 * 하이브리드 타입 (이 타입을 갖는 변수를 마치 객체로도 쓰고 함수로도 쓴다고 해서 하이브리드 타입이라고 불림)
 * 호출 시그니쳐를 이용할때는 객체에 프로퍼티를 정의해줄수있음
 * 가능한 이유는 함수도 객체이기 때문인데 이렇게 프로퍼티를 추가로 정의하면 Operation3타입을 갖는
 * 변수들이
 * add3() 이렇게 함수처럼 호출될 수도 있고
 * add3.name 이렇게 점표기법처럼 마치 객체를 사용하듯이 사용할 수도있음
 * 잘 사용하지는 않음
 */

type Operation3 = {
  (a: number, b: number): number;
  name: string;
};

const add3: Operation3 = (a, b) => a + b;
const sub3: Operation3 = (a, b) => a - b;
const multiply3: Operation3 = (a, b) => a * b;
const divide3: Operation3 = (a, b) => a / b;

add3(1, 2);
add3.name = "은동혁"; 
