/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과를 반환하는지 이야기
function func(a: number, b: number): number {
  // 리턴문의 타입은 어짜피 초기값을 기준으로 타입추론하기 때문에 없애도 상관없음 지금 상황에서는
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

// 기본값 적으면 알아서 string 타입으로 추론함
// 주의점 2가지
// 1. 기본값 주어진 상태로 ex) : number 이런 식으로 다른 타입 주면 안됨
// 2. 함수를 호출할 때 ex) introduce(1); 함수의 타입과 다른 타입을 인수로 전달하면 안됨
// function introduce(name = "은동혁") {
//   console.log(`name: ${name}`);
// }

// 이번에는 매개변수 하나 더 추가해보자
// 필수 매개변수(지우면 오류 ex)인수로 introduce("은동혁", 178); 여기서 "은동혁 지우면 오류남")
// 여기서 주의할 점 필수 매개변수는 선택적 매개변수 무조건 앞에 와야한다!!!! 뒤에오면 오류
function introduce(name = "은동혁", age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    // 10을 더하고 싶은데 tall이 옵셔널 체이닝 사용함으로서 number | undefined가 되기 때문에
    // + 10 하면 undefined랑 더할수도 있어서 오류가 나옴
    // 따라서 if문에 조건문을 typeof를 사용해서 number타입일때를 써주면 오류 안나옴
    console.log(`tall: ${tall + 10}`);
  }
}

introduce("은동혁", 26, 178);

introduce("은동혁", 26); // 이렇게 tall을 생략하고 넣으면 오류가 생김 => 옵셔널 채이닝 사용 하면 tall 인수로 안넣어도 됨(선택적 매개변수)

// rest 파라미터
function getSum(...rest: number[]) {
  // : number[] 이거말고 매개변수 갯수를 정하고 싶다면 튜플사용 [number, number]
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); // 15
