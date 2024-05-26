/**
 * 접근 제어자 (Access Modifier) (TS 클래스에서만 있는 기능임_
 * 클래스를 만들때 특정필드나 메서드에 접근할 수 있는 범위를 설정하는 문법임
 * 접근 제어자는 3가지로 나뉨
 * public, private, protected
 */

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;
  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  // 메서드
  work() {
    console.log("일함");
  }
}

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
  // 메서드
  func() {
    this.name;
    this.age;
  }
}

const employee = new Employee("은동혁", 26, "developer");
// 생성된 인스턴스는 객체이기 때문에 객체의 프로퍼티에 접근해서 값을 수정할 수 있음
// 값을 수정할 수 있는 이유
// 1. 객체이기 때문
// 2. 클래스에 각각의 접근제어자가 기본적으로 public으로 다 설정되어 있기때문임 (default 값임)

/** public
 * public이 기본값이기 때문에 아래 작성한 코드처럼 자유롭게 인스턴스에 접근 가능함
 */
employee.name = "홍길동";
employee.age = 26;
employee.position = "FrontEnd developer";
/** private
 * private를 설정해주면 Employee 클래스 외부에서는 점 표기법으로 접근 불가능함
 * 내부에서만 사용가능, 읽을수도 없음(readonly는 읽을 수는 있음)
 * 내부에서는 템플릿 리터럴 문자로 사용( `${} ${}` 이런식으로)
 * 만약 클래스 외부 접근 막고싶고 메서드에서만 값을 쓸 것이다 하면 private filed 사용
 * private 사용하면 파생 클래스에서도 접근 불가능함
 */

/** protected
 * 만약에 파생 클래스에서는 접근 하게 하고 싶다 protected
 * 외부 접근 막음 (약간 public이랑 private 중간 사이 느낌임)
 */

// 접근제어자(매개변수에 작성)
// 1. 생성자의 매개변수 앞에다가도 작성가능, 단 필드랑 똑같이 접근제어자를 작성 했다면
// 식별자가 중복되었다는 오류가 나오는데 이럴때는 필드 자체를 전부 다 생략해주고 써야함
// 2. 접근제어자가 붙어있는 매개변수들은 자동으로 필드도 정의하고 필드의 값 초기화도 자동으로 함
// this.name = name; this.age = age; this.position = position; 이것들을 삭제해도 자동으로 값을 다 할당하는 작업을함

/** 추가
 * 필드(프로퍼티) 혹은 메소드 앞에 private, public, protected를 추가할 수 있다.
 * private는 해당 클래스의 인스턴스에서만 접근 가능하다.
 * public은 어디에서나 접근할 수 있으며 생략 가능한 default 값이다.
 * protected는 해당 클래스 혹은 서브클래스의 인스턴스에서만 접근이 가능하다.
 * => 외부에서는 접근이 불가능 하다.
 * JS에서는 private으로 설정하고 싶다면 이름 앞에 #을 붙여서 사용한다.
 * protected의 경우 _ 을 붙여 사용한다.
 * 읽기전용으로 만들고 싶다면 readonly를 앞에 붙여주면 된다.
 * readOnly의 경우 JS에서는 getter만 생성하고 setter를 생성하지 않으면 된다.
 */
