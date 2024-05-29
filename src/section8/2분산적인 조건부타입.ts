/**
 * 분산적인 조건부 타입(Distributive Conditional Types)
 * - 조건부 타입을 유니온과 함께 사용할 때 조건부 타입이 분산적으로 동작하게 업그레이드 되는 문법을 말함
 */

// 전 시간 복습과 함께 실습
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

// 이렇게 유니온 타입으로 타입변수를 설정하면 조건부 타입처럼 작동안함 => 우리 초보자의 생각대로면 number가 나와야하는데
// let c: string | number 이렇게 타입이 추론됨 => 분산적인 조건부 타입으로 업그레이드 됨
// 타입변수에 유니온 타입 할당하면 유니온 타입이 그대로 들어오는게 아니라 한번은 number 한번은 string으로 분리되서 들어감
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

// T 유니온 타입에서 U에 해당하는 타입만 제거해 볼 거임
// 우리가 생각하는 결과는 number | never | boolean인데 유니온 타입에 never가 들어가면 never는 사라짐
// 이유: 유니온 타입은 타입간의 합집합 타입을 만드는거임, never 타입은 공집합이 합쳐지는 그냥 원래집합이 나옴
// 따라서 type A = number | boolean 이렇게 나옴
// 정리: 이렇게 분산적 조건부 타입을 이용하면 특정 유니온 타입으로부터 특정 타입만 제거한 유니온 타입을 얻을 수 있음
type A = Exclude<number | string | boolean, string>;

// 하나 더 예시
type Extract<T, U> = T extends U ? T : never;
// Exclude랑 반대로 T 유니온 타입에서 U에 해당하는 타입만 뽑아내 볼 거임
// never | string | never가 나오기 때문에 type B = string 이렇게 나옴
type B = Extract<number | string | boolean, string>;

// + 추가로 분산적 조건부 타입 방지하는 법 => extends 양 옆에 대괄호 붙이면 됨
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;
// 이제는 유니온 타입을 전달해도 분산이 안됨 => 따라서 let d: number가 됨
// 이유: boolean | number | string의 합집합 유니온 타입은 거짓이 되니까 number가 나옴
// let d: StringNumberSwitch<boolean | number | string>; 