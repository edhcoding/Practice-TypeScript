/**
 * 인터페이스
 * - 타입별칭과 동일하게 타입의 이름을 지어주는 문법임
 * ex)
 * type = {
 *  a: string;
 *  b: number;
 * } 이거를
 * interface A {
 *  a: string;
 *  b: number;
 * } 이렇게 바꿀 수 있음
 * - 인터페이스라는 뜻은 상호간에 약속된 규칙을 뜻 함
 * - 예를들어 이 객체는 이런 형태를 가져야해! 와 같은 일종의 약속 또는 규칙을 만들어 주는 문법이라고 생각
 * - 그리고 인터페이스는 객체 타입을 정의하는데 특화된 문법임
 * - 그렇기 때문에 타입별칭에서는 제공하지 않는 상속이나 합침 등의 객체타입을 다루는 여러기능을 제공함
 */

// 인터페이스 쓰고 변수명 쓰고 등호 없이 바로 중괄호로 사용 (enum을 만들때와 비슷)
interface Person {
  name: string;
  age: number;
  // 이렇게 메서드 타입을 정의하는건 타입 별칭과 똑같음
  // sayHi: () => void; 이렇게 함수 타입 표현식 말고도
  sayHi(): void; // 이렇게 호출 시그니쳐를 이용해도 됨 하지만 기본적인 호출 시그니쳐와 다르게
  // 메서드의 이름이 소괄호 앞에 붙는다는 점은 다름
  // 왜냐하면 아래에서 예시
}

// 이렇게 함수에 호출 시그니쳐를 써주면 이거는 실제로 함수 타입을 정의하는 타입이 되는거임
// 만약 sayHi(): void; 위에서 sayHi를 지우면 아래에 있는 (): void;와 같은거임
// 그래서 인터페이스에서 그냥 호출시그니쳐만 쓰면 타입자체가 함수 타입이 되어버리기 때문에
// sayHi와 같은 프로퍼티를 정의할때는 앞에 꼭 이름을 붙여줘야함
// type Func = {
//   (): void;
// };

// const func: Func = () => {};

// 인터페이스 역시 타입별칭과 타입을 정의하는건 똑같음
const person: Person = {
  name: "은동혁",
  age: 26,
  sayHi: function () {
    console.log("hi");
  },
};

/**
 * 이전시간에 배운 함수 오버로딩을 sayHi에 쓰고 싶을수도있음
 * person.sayHi();
 * person.sayHi(1,2);
 * 이럴때는 특별히 함수타입 표현식을 이용하면 안되고
 * sayHi(): void;
 * sayHi(a: number, b: number): void; 지금처럼 호출 시그니쳐를 사용해야함
 * 그런데 이거를 함수 타입 표현식으로 쓰려고 하면
 * sayHi : () => void;
 * sayHi : (a: number, b: number) => void;
 * "sayHi" 식별자가 중복되었습니다라는 오류가 나옴 (오버로드 시그니쳐를 못 알아들음)
 * 만약 메서드에 오버로드 시그니쳐를 구현하고 싶다면 호출 시그니쳐를 사용할 것
 */

/**
 * 인터페이스는 객체 타입을 정의하는 데 특화되어 있기 때문에 타입별칭과 차이점이 조금 있음
 */
interface Person {
  name: string;
  age: number;
  sayHi(): void;
}

// 타입 별칭은 유니온 타입을 만들수 있고 인터섹션 타입도 만들수있음 인터페이스는 못만듬
type Type1 = number | string;
type Type2 = number & string;
// 만약에 인터페이스도 쓰고 싶다면 타입 별칭 뒤에다가 써야함
type Type3 = number | string | Person;
// 아니면 타입주석에다가 써야함
