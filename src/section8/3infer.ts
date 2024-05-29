/**
 * infer (inference- 추론하다)
 * - 조건부 타입 내에서 특정 타입만을 추론하는 기능임
 */

type Func = () => string;
// 여기서 Func 타입의 반환값만을 가지고 오고 싶다면?
type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<Func>; // string => 둘다 매개변수 없고 리턴값이 string으로 같으므로 슈퍼 서브가 없음

// 다른 예시
type FuncA = () => string;

type FuncB = () => number;

type B = ReturnType<FuncA>;

type C = ReturnType<FuncB>; // never => string, number는 서로소 집합 관계임 서로 슈퍼서브가 아님 (거짓)

// 하지만 우리가 원하는것은 함수를 넣으면 함수 타입의 반환 값을 가져오기를 바랬음 => 이럴때 infer 사용
// 사용법
// 1. 함수의 반환값 타입을 string => infer R로 바꿔줌
// 2. ? 뒤에 참이 될 때의 값도 R로 바꿔 줌

// infer R은 그냥 R이라고 생각하면 됨  => R이라는 타입이 있다(타입 변수처럼 생각하면 됨)
// () => string , () => infer R을 비교하는건데 R은 앞에 있는 두개를 참으로 만들도록 동작함
type ReturnType2<T> = T extends () => infer R ? R : never;

type D = ReturnType2<FuncA>; // string

type E = ReturnType2<FuncB>; // number
// 추가로 타입변수에 number 타입을 넣으면 never가 나옴
// number타입이 () => infer R 이 타입의 서브 타입이 될 수 있는 타입을 추론하라고 하면
// R이 뭐가되도 불가능 함, any 타입 치트키를 쓰더라도 슈퍼타입이 될 수 없음
// 추론 불가이기 때문에 거짓으로 추론 => 따라서 never 반환
type F = ReturnType2<number>; // never

// (+)다른 예제

// PromiseUnpack 타입의 역할은 타입변수 T에 제공한 Promise<number> 타입에서 프로미스의 결과값 타입만 때어오는 기능 만들거임
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>; // number 타입이 되기를 바람

type PromiseB = PromiseUnpack<Promise<string>>; // string 타입이 되기를 바람
