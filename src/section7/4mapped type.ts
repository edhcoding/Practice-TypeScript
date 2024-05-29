/**
 * 맵드 타입(Mapped Type)
 * - 기존의 객체타입을 기반으로 새로운 객체타입을 만드는 타입
 * - 맵드타입을 이용하면 특정 객체의 타입을 원하는대로 변환할 수 있기 때문에 하나의 객체 타입으로 다양한 상황 만들 수 있음
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드 타입 - interface로는 못만듬 type 별칭 사용해야함
// 사용법
// 1. 타입별칭 사용후 인덱스 시그니쳐 사용하듯이 작성하는데 in 연산자 사용후 유니온 타입으로 작성 [key in "id" | "name" | "age"]: User[key];
// 해석: [key in "id" | "name" | "age"]: User[key];
// 첫번째 대괄호 안에는 string literal type 인덱스 시그니쳐와 마찬가지로 객체의 프로퍼티 키가 무엇이 될 수 있는지 정의
// 콜론 뒤에 두번째 대괄호 안에는 프로퍼티의 키들이 어떤 리터럴밸류 타입을 가질지를 정의 (인덱스드 엑세스 타입과 같음)
// User[key]는 User["id"] => number, User["name"]=> string, User["age"]=> number 일 수가 있음
// 여기서 끝나는게 아님 key가 끝나는 지점에 ?를 붙여서 맵드타입이 정의하는 모든 타입을 선택적 프로퍼티로 만들 수 있음
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};
// interface PartialUser {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// 추가 예시
// + 프로퍼티 갯수가 많아져서 쓰기 어려우면 keyof 연산자 사용 => 객체 타입의 키를 유니온 타입으로 정의
// + key는 다른 단어로 사용 가능한데 직관성을 위해서 key로 작성함
type BooleanUser = {
  [key in keyof User]: boolean;
};

// 모든 프로퍼티에 읽기 전용 속성 부여
// 이렇게 하면 예를들어 fetchUser를 불러왔을때 수정불가 하겠죠?
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저정보를 불러오는 기능
function fetchUser(): User {
  // 기능
  return {
    id: 1,
    name: "은동혁",
    age: 26,
  };
}

// 한명의 유저정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // 수정하는 기능
}

// 수정할 유저 정보 => age만 바꾸려고함, name, age는 그대로여서 변경값만 보내고 싶은데 user의 타입이 User라서 지우지도 못함
// partialUser라는 인터페이스 만들고 전부 선택적 프로퍼티로 바꾸면 인수로 보내는 값 중에서 변동 없는 값은 빼서 보낼 수 있음
// 이런 방법 별로 좋지는 않음 => 유저정보 수정하는 기능 하나때문에 불필요한 비슷한 인터페이스 하나 더 추가해야함
// 이럴때 맵드 타입 사용
updateUser({
  // id: 1,
  // name: "은동혁",
  age: 24,
});
