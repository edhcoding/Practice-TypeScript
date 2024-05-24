/**
 * 선언 합침(선언 머지) (declaration merging)
 */

// 예전에 타입 별칭을 똑같이 두번쓰면 오류 난다고 배움
// interface는 타입 별칭과 달리 이름 똑같아도 오류 안남
// 이유: 동일한 이름으로 선언된 interface는 결국 모두 합쳐짐 -> 이러한 현상을 선언 합침이라고 부름
interface Person {
  name: string;
}

interface Person {
  // name: number; 동일한 프로퍼티를 중복정의하는데 타입을 다르게 정의하는 경우를 충돌이라함 (오류)
  name: string; // 타입 같아야 오류 없음
  age: number;
}

// 헷갈리면 안되는 예시
// 이건 인터페이스 확장이지 인터페이스 선언 합침이 아니기 때문에 타입이 달라도 됨
interface Developer extends Person {
  name: "hello";
}

// 선언 합침
const person: Person = {
  name: "",
  age: 26,
};

/**
 * 모듈 보강
 * 이러한 선언합침은 잘 사용하지 않고 보통 TS의 모듈 그러니까 TS의 라이브러리의 타입을 정의가
 * 부실할 경우 우리가 직접 타입을 좀 더 추가해주고 정확하게 만들어주는 일종의 모듈 보강이라는
 * 작업을 할 때 사용함
 */

/**
 * 어떠한 라이브러리가 간단한 lib이라는 객체를 제공해줌
 * 여기서 만약에 c라는 프로퍼티를 추가하고 싶음 하지만 보통의 라이브러리들은 interface처럼
 * 타입의 정의가 끝나있을거기 때문에 우리가 임의대로 객체 추가를 못함
 * 이럴때 인터페이스 선언 합침을 사용하면 됨
 */

interface Lib {
  a: number;
  b: number;
}

// 모듈보강
interface Lib {
  c: number;
}

const lib = {
  a: 1,
  b: 2,
  c: 3,
};

/**
 * 예시가 완벽하지는 않음 보통 라이브러리 코드들은 node_modules안에 있기 때문에
 * 불러와서 모듈보강하는 작업들이 추가로 더 필요함
 */
