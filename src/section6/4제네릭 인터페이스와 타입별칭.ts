/**
 * 제네릭 인터페이스
 * - 하나의 인터페이스로 다양한 타입의 객체를 표현할 수 있음
 */

// 앞에서 말한 타입변수 ex)<T> 를 사람마다 다르게 말하기는 함
// 타입변수 = 타입 파라미터 = 제네릭 타입변수 = 제네릭 타입 파라미터 (공식문서는 타입변수로 돼있음)

// 제네릭 인터페이스는 제네릭 함수 만들때와 똑같이 만들어 주면 됨
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// let keyPair: KeyPair = {} 바로 중괄호 열면 오류나옴 제네릭 인터페이스는 타입으로 변수를 정의할때
// 반드시 꺽쇠를 열고 타입을 할당해줘야함
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 다음으로는 제네릭 인터페이스는 객체의 인덱스 시그니쳐 문법이랑 같이 사용하면 굉장히 유연한 객체 타입 만들 수 있음
/**
 * 인덱스 시그니쳐
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -34213,
};

// 제네릭 인터페이스 만들기 위해 타입변수 V 만들고, 인덱스 시그니쳐 선언해주는데 value 타입으로 타입변수 V 정의
// 이렇게 하면 value의 타입을 바꿔서 쓸 수 있음
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 * - 만드는법은 제네릭 인터페이스와 크게 다를거 없음
 * interface Map<V> {
  [key: string]: V;
}
 * 제네릭 인터페이스에서 만든 맵 인터페이스를 제네릭 타입 별칭으로 만들어 보겠음
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * - 이렇게 배운 제네릭 인터페이스를 어떤 상황에서 사용해야 할까?
 * - 유저 관리 프로그램
 * -> 유저 구분 : 학생유저 , 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T /*Student | Developer*/;
}

// 학생만 가능한 기능
function goToSchool(user: User<Student>) {
  // 잘 만들었는데 이 프로그램의 유저 구분, 특정회원만 사용하게 하는 함수도 많아지면 불편해짐 만들때마다 타입 좁히기 사용해야해서 길어지고 그럼
  // if (user.profile.type !== "student") {
  //   console.log("잘 못 오셨습니다");
  //   return;
  // }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
}

const developerUser: User<Developer> = {
  name: "은동혁",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "순천대학교",
  },
};
