/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

// value => number : toFixed
// value => string : toUpperCase
function func(value: number | string) {
  // 마치 아래의 조건문이 number타입 값 이외에는 중괄호 내부로 들어갈 수 없도록 가드한다고해서
  // TS에서는 타입 가드(Type Guard)라고 부름
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

/**
 * typeof 이외에도 여러가지 타입 가드가 있음
 */

type Person = {
  name: string;
  age: number;
};

// Date 같은 nodejs가 제공하는 기본적인 내장함수들은 타입으로 다 제공됨
// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func2(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // typeof value === "object" 이렇게 사용하면 좋지않음
    // value: number | string | Date | null까지 들어오면 바로 오류나옴
    // 자바스크립트의 typeof에다가 null 값을 넣어도 똑같이 object 반환하기 때문임
    // 이럴때 instanceof 를 사용하면됨
    // instanceof 연산자는 왼쪽의 값이 오른쪽의 instance냐고 물어보는거임
    // 그렇다면 true 아니면 falese를 반환함
    // 쉽게말하면 instanceof 연산자는 왼쪽의 값이 Date객체냐고 물어보는거임( 자바스크립트 객체 지향에서 나온다고 함)
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // 방금 배운대로 value instanceof Person 사용하면 오류나옴
    // 오류 : 'Person'은(는) 형식만 참조하지만, 여기서는 값으로 사용되고 있습니다.
    // 형식만 참조한다는 곳은 Person은 타입이라는 뜻임
    // 발생하는 이유 : instanceof 연산자는 우측에 타입이 들어오면 안됨
    // 엄밀히 말하면 instanceof는 왼쪽에 오는 값이 오른쪽에 오는 이 class의 instance인지 확인하는 연산자임
    // Date는 자바스크립트의 내장 class이기 때문에 사용가능
    // 이렇때는 in 연산자 사용 하면 됨
    // 앞에는 property 이름 작성 뒤에는 안에있는 값인지 물어보면 됨
    // "age" in value 존재하면 true 아니면 false 반환
    // "age" in value 하지만 오류 나옴 in 연산자 뒤에는 null, undefined 들어오면 안됨
    // value && "age" in value 로 사용하면 됨
    console.log(`${value.name}은 &{value.age}살 입니다.`);
  }
}
