/**
 * Exclude<T, U>
 * - 제외하다, 추방하다
 * - T에서 U를 제거하는 타입
 */

// 구현
type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>
// 2단계
// string |
// never
// 최종적으로는 string | never => string

type A = Exclude<string | boolean, boolean>; // string

/**
 * Extract<T, U>
 * - T에서 U를 추출하는 타입
 */

// 구현
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>; // boolean

/**
 * ReturnType<T>
 * 함수의 반환값 타입을 추출하는 타입
 */

// 구현
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
// 동작
// typeof funcA 해서 추론하고 타입변수 T에는 매개변수가 없이 () => string으로 들어갈거임
// T 타입이 서브타입이 되도록 하는 R을 추론하는거임 이때의 R은 string 타입이 될 거임

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
