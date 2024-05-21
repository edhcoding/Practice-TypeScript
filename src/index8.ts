// 타입은 집합이다

// 타입호환성 - 어떤 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것
// ex) number type --->(x) number literal type
//     number type <---(o) number literal type

// number type(슈퍼타입 - 부모타입)
// number literal type(서브타입 - 자식타입)

// 서브타입의 값을 슈퍼타입으로 취급하는걸 - 업 캐스팅 (Up Cast) - 대부분 상황에 가능
// 슈퍼타입의 값을 서브타입으로 취급하는걸 - 다운 캐스팅 (Down Cast) - 대부분 상황에 불가능

let num1: number = 10;
let num2: 10 = 10;
num1 = num2; // 서브에서 슈퍼 타입으로 가능
// num2 = num1 은 부가능
