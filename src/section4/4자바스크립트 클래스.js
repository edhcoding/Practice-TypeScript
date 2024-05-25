/**
 * 클래스
 */

// student A,B는 name, grade, age 프로퍼티도 같고 메서드도 같음 그럼 똑같은 형식인 거임
// 동일한 형식,모양의 객체를 여러개 만드려면 중복된 코드가 많음 => 이럴때 JS 클래스 문법 사용
// 객체가 붕어빵이라면, class는 붕어빵 기계
let studentA = {
  name: "은동혁",
  grade: "A+",
  age: 26,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

// let studentB = {
//   name: "홍길동",
//   grade: "B-",
//   age: 26,
//   study() {
//     console.log("열심히 공부 함");
//   },
//   introduce() {
//     console.log("안녕하세요!");
//   },
// };

// class이름은 앞글자 대문자를 쓰는 파스칼 표기법을 사용함
// class가 붕어빵 기계라고 했으니까 어떤 붕어빵을 찍을지 중괄호 안에 필드를 작성해야함
// 필드 만들면 이제 생성자를 만들어야함
// 생성자: class를 이용해서 새로운 객체를 만들라고 호출하면 실제로 객체를 생성하는 역할을 하는 함수임
// 실제로 객체를 만드는 메서드다 라고 해서 생성한다 생성자라고 부름
// 주의점! , 쉼표 안쓰고 ; 세미콜론찍고 메서드는 아무것도없이 중괄호 끝냄
class Student {
  // 필드
  name;
  grade;
  age;
  // 생성자
  // constructor라고 쓰면 이게 메서드가 되는거임 여기에 filed에 해당하는 프로퍼티들을
  // 매개변수로 받아주고 이 값들을 실제로 만들 객체의 프로퍼티의 값으로 설정해야함
  // constructor 메서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드입니다.
  constructor(name, grade, age) {
    // 이때의 this는 클래스가 만들고 있는 객체를 가리킴
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  // 메서드
  // 간단함 그냥 메서드 똑같이 작성하면됨
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다!`);
  }
}

// class 이용해서 객체를 만들어보자
// 사용법
// 1. 새로운 객체를 만들라는 의미에서 new라는 키워드를 써주고
// 2. new 뒤에 클래스 이름을 붙임
// 3. 그리고 마치 함수를 호출하듯이 소괄호를 열고 인수를 전달함 => 실제로는 생성자를 호출하는거임
// 이제 인수가 그에 맞는 위치의 매개변수로 할당됨

// 참고로 클래스를 이용해서 만든 객체를 => 인스턴스 라고 부름
// ex) student instance 라고 부름
let studentB = new Student("은동혁", "A+", 26);
console.log(studentB);
// 메서드 호출도 간단함
studentB.study();
studentB.introduce();

// 하나 더 연습
// 문제점이 있음 => 지금 student 클래스의 파생 클래스를 만들다 보니까 중복코드가 또 많이 발생함(똑같은 생성자, 똑같은 메서드)
// 이때 마지막으로 배울 클래스의 기능인 상속(인터페이스 확장에서 확장의 다른말이 상속이라 배움)을 사용해야함
// 사용법 StudentDeveloper 뒤에 extends 사용하고 확장할 클래스 이름 Student 작성
class StudentDeveloper extends Student {
  // 필드
  // name;
  // grade;
  // age;
  favoriteSkill;
  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    // 확장 기능 사용할때 주의 점 매개변수는 지우면 안됨
    // super라는 함수를 호출하고 인수를 전달해줌 => 우리는 student 클래스를 확장 받아오면서 필드와 메서드를 그대로 받아옴
    // 하지만 생성자 함수인 constructor은 매개변수로 4개의 값을 제공 받긴 하는데
    // 지금 name, grade, age 제외한 favoriteSkill의 값만 설정했음
    // 이럴때는 super라는 함수를 호출하고 name, grade, age 인수로 넘겨주고 super 함수를 호출하면
    // 부모 클래스인 super 함수의 생성자가 호출이 됨
    // 결과적으로 name, grade, age, favoriteSkill 4가지의 값들이 프로퍼티로 잘 설정이 됨
    super(name, grade, age);
    // this.name = name;
    // this.grade = grade;
    // this.age = age;
    this.favoriteSkill = favoriteSkill;
  }
  // study() {
  //   console.log("열심히 공부 함");
  // }
  // introduce() {
  //   console.log(`안녕하세요 ${this.name} 입니다!`);
  // }
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("홍길동", "B+", 27, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
