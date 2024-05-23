/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

// 아래와 같이하면 Person 타입이 지금 초기화 값인 빈 객체를 기준 값으로 추론되어 버리기 때문에
// person 변수의 타입이 그냥 빈 객체로 추론되어 버림
// 그래서 name 과 age 프로퍼티가 없다는 경고가 나옴
// let person = {};
// person.name = "이정환";
// person.age = 27;

// 이렇게 우리 의도와 다르게 변수의 타입이 추론 되어버리기 때문에
// 원하는 기능을 만들기 어려울때는 초기화 값의 타입을 단언 해주면 됨
// as 쓰고 타입을 쓰면 TS 컴파일러한테 이 타입으로 간주하라고 말하는거임
// 이렇게 값의 타입을 프로그래머가 직접 단언하는 방법을 타입 단언 (Type Assertion)이라 함

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

// let dog: Dog = {
//   name: "돌돌이",
//   color: "brown",
//   // breed: "진도", 초과 프로퍼티 검사 발동
// };

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B (라고 할 때)
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

// 10은 number 타입이고 never 타입은 모든 타입의 서브타입이기 때문에 A 가 B의 슈퍼타입 임
// 이 규칙을 만족하기 때문에 타입 단언이 이루어 짐
let num1 = 10 as never;
// A가 B의 서브 타입이기 때문에 규칙 만족
let num2 = 10 as unknown;

// let num3 = 10 as string; 슈퍼 서브 타입이 아님

/**
 * const 단언
 */

// 뒤에 const를 붙이면 number literal type 으로 추론됨
let num4 = 10 as const;

// 특히 const 단언은 객체랑 같이 쓸 때 좋은데용
// const 붙이면 모든 프로퍼티가 readonly 읽기 전용 프로퍼티로 변함
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// as const를 붙여서 초기화한 객체는
// property의 값을 수정할 수 없는 객체가 됨
// cat.name = "멍뭉이"; (읽기 전용 속성으로 변했기 때문임)

/**
 * Non, Null 단언
 * 어떤값이 null 이나 undefined가 아니라고 TS compiler에게 알려주는 역할을 함
 */

// 예시 상황 게시판을 만들거임 익명이 가능하기 때문에 author는 없앨수도 있으므로
// optional chaining 사용함 
// (선택적 프로퍼티로 만듬)
// (앞의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환한다.)

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

// 오류 : number | undefined 형식은 number형식에 해당할 수 없음
// const len: number = post.author?.length

// 이 오류를 해결하려면 ? 물음표가 아니라 ! 느낌표 사용하면 됨x
// 느낌 author는 undefined이 아니라 값이 있어?! 라는 느낌??
// ! 느낌표 연산이 non null 단언임
// author가 null 이나 undefined가 아니라고 컴파일러가 믿도록 만듬
const len: number = post.author!.length;

/**
 * 정리
 * type 단언은 실제로 그 값을 단언한 type으로 바꾸는거는 아님
 * upcasting , downcasting이랑 다름
 * 그냥 TS compiler의 눈을 잠깐 가리는 역할을 할 뿐임
 * 그래서 non null 단언 같은 경우에도 author 프로퍼티가 없어도 믿음
 * 위험하기 때문에 진짜 쓸 상황아니면 안쓰는게 좋음
 */
