// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

// 리턴값 타입 지정 가능
function func1(): string {
  return "hello";
}

function func2() {
  console.log("hello");
}

let a: void;
// a = 1;
// a = "hello";
a = undefined;

// never
// never -> 존재하지 않는
// 불가능한 타입

// while (true) {} <- 이거는 무한루프 돔
// 정상적으로 종료될 수 없어서 반환값이 있는데 모순일때 never 사용, 모순이므로 void 사용불가
function func3(): never {
  while (true) {}
}

// JS는 프로그램 실행 중에 throw new Error(); 에러를 던져줄 수 있음
// 이런 함수의 경우에도 실행되면 바로 프로그램이 중지될 거기 때문에 반환 값 타입으로 never 정의
function func4(): never {
  throw new Error();
}

// 변수에 정의하면 어떤 값도 담을 수 없음
// undefined를 담을 수 있는 void와 달리 never는 undefined 담을 수 없음
// 그 어떠한 값도 절대 담을 수 없음 ex) tsconfig.json 수정해도 아무것도 안됨
let b: never;
