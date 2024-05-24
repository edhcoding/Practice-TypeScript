/**
 * 인터페이스 확장
 * 타입 별칭은 없고 인터페이스에만 있는 특별한 기능 - 인터페이스 확장
 */

// name, age 프로퍼티가 4번중복 비효율적이고 메인 프로퍼티 바꾸면 서브 프로퍼티도 전부 바꿔줘야 함
// 이럴때 인터페이스 확장을 사용함

// 사용하는법
// 1. 서브 프로퍼티에서 Animal 프로퍼티와 중복된 프로퍼티를 제거
// 2. 중복되는 Animal 타입의 프로퍼티를 받아오면됨
// 2-1 Dog 라는 이름 옆에 extends 적고 그 옆에 Animal을 적으면 됨 (extends: 확장하다)

// 이렇게 extends를 이용해서 다른 interace의 프로퍼티들을 자동으로 다 포함하게 해주는 문법을
// 확장이라 하고 다른 말로는 상속이라고 함
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // 상속을 받는 interface에서 동일한 프로퍼티의 타입을 다시 정의 가능 하지만 다 되는건 아니고
  // 규칙이 있음 - 원본 타입의 서브 타입이여야 함 ex 원본 string 서브 number => 오류발생
  name: "돌돌이";
  isBark: boolean;
}

// extends Animal 하고난 후 name, color가 잘 불러와짐
const dog: Dog = {
  name: "돌돌이",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  name: "돌돌이"
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 인터페이스 확장

// 동일한 프로퍼티의 타입을 다시 정의할 수 있다고 해서 이렇게 다중 인터페이스 확장할때는
// Dog, Cat의 프로퍼티가 다르면 오류 나옴 ex) 돌돌이에만 name 프로퍼티 따로 다시 정의하면 오류
interface DogCat extends Dog, Cat {}

const dogcat: DogCat = {
  name: "돌돌이",
  color: "",
  isBark: true,
  isScratch: true,
};
