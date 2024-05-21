// any
// 특정 변수의 타입을 우리가 확실히 모를때 사용
let anyVar: any = 10;
anyVar = "hello";
// JS처럼 타입 상관없이 아무 값이나 담게 하려면 any type 사용
// anyVar = true;
// anyVar = {};
// anyVar = () => {};
// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

//unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
// num = unknownVar 이거는 안됨
// 메서드도 사용불가
// 연산기호도 사용불가

if (typeof unknownVar === "number") {
  num = unknownVar;
}
// 이렇게 타입 정제 or 타입 조픽을 통해서는 사용 가능함
