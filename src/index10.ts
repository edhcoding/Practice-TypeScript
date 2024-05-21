// 객체 타입의 호환성

/**
 * 기본타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; //이건 오류 x

// dog = animal; //이건 오류 있음

// Book 타입에 있는 프로퍼티를 ProgrammingBook 타입이 이미 가지고 있고
// 추가적인 프로퍼티까지 가지고 있기 때문에 ProgrammingBook타입에 해당되는 값들은
// 모두 Book 타입에 포함될 수 있음
// 따라서 Book 타입이 슈퍼타임 ProgrammingBook이 서브 타입임

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "타입스크립트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book; 오류

/**
 * 초과 프로퍼티 검사 (TS의 특수한 기능)
 * 변수를 초기화 할 때 초기화 하는 값으로 객체 리터럴을 사용하면 발동하는 검사임
 * 객체 타입 변수를 초기화 할 때 객체 리터럴을 사용하면 초과 프로퍼티를 안되도록 막는 검사
 */

// type Book = {
//   name: string;
//   price: number;
// };

// let book2: Book = {
//   name: "타입스크립트",
//   price: 33000,
//   skill: "reactjs",
// };
// 이렇게 하면 당연히 우리가 Book 타입에는 skill을 추가하지 않았기 때문에 에러가 뜨는게 맞음
// 하지만 book = programmingBook; 여기서는 programmingBook을 Book타입에 넣는게 가능한 업 케스팅이라고 말했는데
// 초기화 할 때 programmingBook타입을 넣으려고 하니까 이건 안된데 이상하죠?

// 만약에 이러한 초과 프로퍼티 검사를 피하려면
// let book3: Book = programmingBook;
// 초기화 할 때 객체 리터럴을 사용한 건 아니기 때문에 초과 프로퍼티 검사가 발동하지 않아서
// 이런 경우에는 허용됨
