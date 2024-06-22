/**
 * 대수 타입
 * - 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * - 합집합, 교집합 타입이 존재함
 */

/**
 * 1. 합집합 타입(Union 타입)
 */
let a: string | number | boolean;
a = "hello";
a = 1;

a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 두 타입이 모두 공통으로 갖는 프로퍼티만 넣으면 오류나옴
// let union4: Union1 = {
//   name: ""
// };

/**
 * 2. 교집합 타입 - Intersection Type
 */
let variable: number & string;

type Cat = {
  name: string;
  color: string;
};

type Human = {
  name: string;
  language: string;
};

type Intersection = Cat & Human;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
