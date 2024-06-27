/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog { // 쉽게말해서 return 값이 true면 animal은 Dog타입이다!
  // 원래 이건데 animal.isBark !== undefined; 타입이 잘안좁혀지므로 타입 단언하면됨
  // 하지만 TS는 함수의 반환값을 가지고는 타입을 잘 좁혀주지 않음
  // 이럴때는 함수 자체를 타입 가드 역할을 하도록 만듬 이 함수의 반환값의 타입으로 true 일때
  // animal is Dog (is 타입을 쓰면 return 값이 true면 animal을 Dog 타입으로 보라! 이런 느낌)
  // 'as' 키워드란 요약하자면 '컴파일' 단계에서 타입 검사를 할 때 타입스크립트가 감지하지 못하는
  // 애매한 타입 요소들을 직접 명시해주는 키워드라고 볼 수 있다
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  // 원래 "isBark" in animal 이거였음 프로퍼티 이름을 기준으로 타입을 좁히면 직관적으로 별로 안좋고 프로퍼티 이름이 중간에 바뀌기라도 한다면
  // 타입이 제대로 좁혀지지도 않음
  // 이럴때 사용하는게 사용자 정의 타입가드임
  if (isDog(animal)) { //위에코드 function isDog(animal: Animal): animal is Dog
    animal;
    // 강아지
  } else if ("isScratch" in animal) { // 이렇게 쓰면 안좋으므로 isScratch(animal)로 작성!
    animal;
    // 고양이
  }
}
