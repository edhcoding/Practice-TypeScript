/**
 * 유틸리티 타입(Utility Types)
 * - TS가 자체적으로 제공하는 특수한 타입들을 말함
 * - 제네릭, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해 실무에서 자주 사용되는 타입을 미리 만들어 놓은것을 말함
 */

// ex) Readonly<T>
interface Person {
  name: string;
  age: number;
}

// Readonly라는 유틸리티 타입을 사용하면 타입변수로 전달한 객체 타입의 모든 프로퍼티를 readonly 프로퍼티로 만듬
const person: Readonly<Person> = {
  name: "은동혁",
  age: 26,
};

// person.name = ""; 접근 불가

// ex) Partial<T>
interface Person {
  name: string;
  age: number;
}

// Partial에 타입변수로 전달한 객체 타입을 모두 선택적 프로퍼티로 만듬
const person2: Partial<Person> = {
  name: "은동혁",
};

// 유틸리티 타입은 엄청 많음 => 공식 사이트 주소 https://www.typescriptlang.org/docs/handbook/utility-types.html

/**
 * 너무 많기 때문에 자주 사용되는 몇가지 유틸리티 타입만을 사용할 거임
 * 1. 맵드 타입 기반으로 만들어진 타입 6가지
 * - Partial<T>, Pick<T,K>, Required<T>, Omit<T,K>, Readonly<T>, Record<T,K>
 *
 * 2. 조건부 타입 기반으로 만들어진 타입 3가지
 * - Exclude<T, U>, Extract<T, U>, ReturnType<T>
 */
