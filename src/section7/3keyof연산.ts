/**
 * keyof 연산자 (keyof operator)
 * - keyof 연산자는 객체 타입에 적용하는 연산자임
 * 주의: keyof 연산자는 무조건 type에만 사용해야함
 */

/* 추가: keyof 연산자는 typeof 연산자랑 같이사용할 수 있음
인터페이스를 없애고 아래와 같이 코드를 적으면 => person변수의 타입을 추론해서 Person 타입별칭에 정의해줌
이렇기 때문에 아래 함수의 매개변수에서 key: keyof Person 이거를 => key: keyof typeof person 이라고 적어도 같은 말임 
*/
type Person = typeof person;
// interface Person {
//   name: string;
//   age: number;
// } 


// 함수를 만드는데 매개변수 값으로 person타입 객체 하나랑, key값을 받고
// 함수 내부에서는 person 객체로부터 key property의 값을 반환하는 함수를 생성함
// person 매개변수의 타입은 Person 타입으로 하면 되는데 key의 타입은 애매함
// key를 string 타입으로 하면 리턴문에서 오류나옴 => 모든 문자열 값이 person 객체의 키라고 볼 수 없기 때문임
// 이럴때는 name과 age만 들어올 수 있게 유니온 타입으로 만들어줘야함 key: "name" | "age" => 하지만 이래도 문제가 큼
// 프로퍼티가 늘어날수록 복잡해짐 => 비효율적 => 이럴때 keyof 연산자 사용하면 좋음
// 사용법 => key의 타입을 key: keyof Person으로 정의해주면 됨
// 이게 무슨 타입이되냐면 Person 객체 타입으로부터 모든 프로퍼티의 key를 유니온 타입으로 추출함
function gerPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person /* : Person */ = {
  name: "은동혁",
  age: 26,
};

// 함수를 호출하고 인수로는 person 변수 name property key 하면 은동혁이 나와야함
gerPropertyKey(person, "name"); // 은동혁
