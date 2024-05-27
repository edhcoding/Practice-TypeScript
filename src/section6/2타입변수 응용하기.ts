/**
 * 첫번째 상황
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

// 제네릭 함수로 만들었는데 swap("1", 2); 이런식으로 string 타입으로 변환시키면 오류나옴
// 이유 "1"이 string 타입이여서 a와b 모두 string 타입이 들어감 2는 number 타입인데 이미 b: T에는
// string 타입이 들어가 있어서 오류 나옴
// 해결방법 T라는 타입변수 하나만 작성하지말고 U라는 타입변수 하나 더 늘리면 됨
const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]] /* T => T[] */) {
  // 타입변수 사용하니까 오류나옴 => unknown 타입에다가 배열 인덱스 넣지 말라는 오류나옴
  // 이럴때는 data 타입의 수정해줌 T => T[]
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

// T[] 바꾼후 [1, "hello", "mynameis"] 이거의 타입은 (string | number)[]로 추론되는데 첫번째 인덱스 타입알게
// number이렇게 하고 싶음 이럴땐 data: T[] => data: [T, ...unknown[]]
let str = returnFirstValue([1, "hello", "mynameis"]);

/**
 * 세번째 사례
 */

// data: T를 넣게되면 data.length; 여기에 오류발생 => T 형식에 length 속성이 없습니다
// 이럴때는 T의 타입을 제한하는 방법이 있음 <T> => <T extends { length: number }> 이 코드를 해섯해 보자면
// T는 확장하는 타입인데 뭘 확장할거냐 number 타입의 프로퍼티 length를 가지고 있는 객체를 확자하는 타입으로 T를 제한한다
// interface InterfaceA {
//   length: number;
// }

// interface InterfaceB extends InterfaceA {} 여기서 보면 InterfaceB는 무조건 length 프로퍼티를 가지고 있는거임 이거와 같음
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

// 현재 data: any 여서 앞에 3개는 오류 없음
// 숫자값 인수 10을 넣는다고 해도 오류 안나옴 => 이거를 제네릭 함수를 사용해서 이러한 값들은 전달하지 못하게 하고
// length가 존재하는 값은 전달할 수 있게 만들어 주겠음
// let var4 = getLength(10); length 프로퍼티가 없으므로 제한됨
