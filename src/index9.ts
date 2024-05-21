/**
 * Unknown 타입 - 모든
 */

function unknownExam() {
  let a: unknown = 1; // Up Cast로 가능, 반대로 Down Cast는 불가능
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * never 타입
 * - 불가능 , 모순을 의미하는 타입
 * - 모든 타입의 서브 타입
 * - 모듭 집합의 부분 집합(공집합 - 아무것도 없는 집합)
 * - 절대 이 함수가 반환하는 것 자체가 말이 안될다 라고 할 때
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc(); // up casting 이니까 가능
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
}

/**
 * void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; //up casting 이므로 return도 가능
  }

  let voidVar: void = undefined;
}

/**
 * any 타입
 * 치트키 - 타입 계층도 완벽히 무시
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedvar: undefined;
  let neverVar: never;

  // any는 자기한테 오는 down casting도 되고 자기가 down casting 하는것도 가능함
  anyVar = unknownVar; //down casting 인데 오류 안나오고 허용 됨
  undefinedvar = anyVar; //down casting 됨
  // 이 치트키도 안되는게 있음
// neverVar = anyVar; 이건 안됨 never type은 정말 순수한 공집합 이기 때문에 어떠한 타입도 down casting 불가
}
