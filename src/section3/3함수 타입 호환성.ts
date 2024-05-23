/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 말
 * 함수 타입 호환성을 판단할 때 체크리스트 2가지 (2가지 모두 만족해야 두 타입이 만족된다고 할 수 있음)
 * 1. 반환값의 타입이 호환되는지
 * 2. 매개변수의 타입이 호환되는지
 */

// 기준1. 반환값의 타입이 호환되는지
type A = () => number;
type B = () => 10;

let a: A = () => 10; // 반환값 number 타입
let b: B = () => 10; // 반환값 number literal 타입

a = b; // 반환값 타입끼지 업캐스팅일 경우에는 호환된다고 말할 수 있음
// b = a; 허용안됨 (타입이 다운 캐스팅임)

// 기준2. 매개변수의 타입이 호환되는지 (상황이 2가지로 나뉨)
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// number 와 number literal 업캐스팅 관계인데 오류가 나옴
// 반환값 타입을 기준으로 호환성 타입을 판단할 때와는 다르게 매개변수 타입을 기준으로 호환성 타입을
// 판단할때는 반대로 업케스팅 일때는 호환이 안됨
// c = d;
d = c;

// 이걸 이해하기 위해서는 매개변수가 객체 타입일때를 알아야함
// Animal 타입이 Dog 타입의 슈퍼타입임
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // animal 타입의 매개변수의 타입이 더 큰 타입임 왜냐 Animal 타입이 슈퍼타입이니까
dogFunc = animalFunc;

// animalFunc = dogFunc; 안되는 이유 다시 직관적으로 설명
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
  // 왜 오류가 발생하냐 Animal 타입에는 color 라는 프로퍼티가 없음 따라서 animalFunc = dogFunc;
  // 이런게 성립해버리면 console.log(animal.color); 같은 말도 안되는 코드가 나올 수 있기 때문에
  // 업케스팅을 막은거임
};

// dogFunc = animalFunc; 되는 이유 다시 직관적으로 설명
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  // 이건됨 왜냐하면 dog 타입은 animal 타입의 서브타입 이기 때문에 기본적으로 Animal 타입이 가지고 있는
  // 모든 타입을 Dog타입은 다 가지고 있음 그래서 할당을해도 오류가 없는거임
};

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; 오류나옴
// 매개변수의 개수가 다를때에는 할당하려고 하는 함수의 타입에 매개변수의 개수가 더 적을때에만 호환이 된다.
// 대신 적어도 갯수가 다를 때의 기준을 적용하려면 타입이 같은 매개변수가 있어야한다!!
