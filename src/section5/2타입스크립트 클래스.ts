/**
 * 타입스크립트 클래스
 */

const employee = {
  name: "은동혁",
  age: 26,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  // 필드
  // name: string; 넣어도 오류나옴 => 속성 'name'은(는) 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.
  // 이니셜라이저는 초기값이라는 뜻임
  // 해결방법: 1. 옵셔널 채이닝 사용 => 별로 좋은 방법은 아님 2. 기본값을 할당 3. 기본값을 마땅히 넣을게 없으면 생성자를 생성
  name: string;
  age: number;
  position: string;
  // 생성자
  constructor(name: string, age: number, position: string) {
    // 생성자를 생성해주면 name, age, position 필드의 값이 정상적으로 초기화 되기 때문에 오류 발생 안함
    this.name = name;
    this.age = age;
    this.position = position;
  }
  // 메서드
  work() {
    console.log("일함");
  }
}

// 확장 클래스 만들어 보자
class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;
  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

// 인스턴스 생성
const employeeB = new Employee("은동혁", 26, "개발자");
console.log(employeeB);

// TS에서의 클래스는 JS 클래스로 취급되면서 동시에 타입으로도 취급됨
// 쉽게말해서 Employee라는 클래스 자체가 하나의 타입으로도 취급됨
// 변수를 만들고 타입처럼 적용해보면 클래스에서 정의한 필드들을 전부 가지고 있어야하고
// 메서드도 가지고 있는 객체 타입으로 정의 됨
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
