/**
 * 조건부 타입(Conditional Types)
 * - JS의 삼항연산자와 같이 조건에 따라 타입을 결정하는 문법
 */

// 예시 - number type이 string type을 확장하는 타입이냐? 라고 물어보는거임
// 제네릭의 타입 변수를 제한할때 extends 키워드 사용할때 배웠듯이 number는 string 타입의 서브 타입이 아님
// 그렇기 때문에 이 조건은 거짓이 되고 number type이 됨
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// ObjA가 ObjB의 슈퍼타입이기 때문에 확장함 따라서 참이므로 number type이 됨
type B = ObjB extends ObjA ? number : string;

// 지금까지는 너무 기본적인 문법이고 활용할 곳도 많지 않음
// 조건부 타입은 제네릭과 함께 써야 시너지 효과가 생김

/**
 * 제네릭과 조건부 타입
 */

// T - number => string
// T - string => number
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

// 함수 오버로딩 - 오버로드 시그니쳐 생성
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: any) {
  // replaceAll 메서드는 매개변수로 받는 텍스트를 전부 바꿔줌
  // 아래의 뜻은 공백문자 모두를 빈문자로 바꿔라 라는 뜻
  // 여기서 text: string => text:string | undefined | null로 바꾸면 text는 string 메서드 사용못해서 오류남
  // 이럴때 삼항연산자 사용하면 오류는 없어지겠지만 반환값은 여전히 오류 => 제네릭과 함께 사용
  // 사용하면 또 결과값은 오류가 없어지겠지만 함수 내부에서는 오류 => 함수 내부에서는 조건부 타입의 결과가 어떤거인지 모르고
  // 제네릭을 다룰때 타입변수 T도 함수 내부에서는 unknown타입이 됨 => 이럴때는 어쩔수 없이 any 타입으로 타입 단언을 해줘야 함
  // 하지만 또 any타입을 사용하면 너무 아쉬움 치트키를 쓰는것과 다름없기 때문에 => 이럴때는 함수 오버로딩을 사용하면 됨
  // 타입 단언 삭제, 구현 시그니쳐에 있는 타입변수도 삭제, 반환값 타입도 삭제 => 어차피 오버로드 시그니쳐에 있음
  // 매개변수 타입만 any 타입 사용
  if (typeof text === "string") {
    return text.replaceAll(" ", "") /* as any */;
  } else {
    return undefined /* as any */;
  }
}

let result = removeSpaces("hi im dongdong");
console.log(result); // "hiimdongdong"
// 반환값은 string 타입이 되므로 string 메서드 사용해도 상관없음
result.toUpperCase();

let result2 = removeSpaces(undefined);
