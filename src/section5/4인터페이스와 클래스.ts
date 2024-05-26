/**
 * 인터페이스와 클래스
 * - TS의 인터페이스와 클래스를 함께 사용하는 방법에 대해 배워보자
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void; // 호출 시그니쳐
}

// 인터페이스가 정의한 타입의 객체를 캐릭터 클래스가 정의하도록 생성할 수 있음 => 클래스 이름뒤에  implements 쓰고 인터페이스 이름 작성
// implements 우리말로 구현하다라는 뜻임 이렇게 작성하고 직역해보면
// 캐릭터 클래스는 캐릭터인터페이스를 구현한다 여기서의 인터페이스는 마치 클래스의 설계도 역할을 한다고 생각
class Character implements CharacterInterface {
  // 필드
  // name: string; 접근제어자 설정으로 인해 필요 없음
  // moveSpeed: number;
  // 생성자
  // 여기서 좀 더 깔끔하게 만들라면 매개변수에 접근제어자까지 대입
  constructor(public name: string, public moveSpeed: number) {
    // this.name = name; 접근제어자 설정으로 인해 필요 없음
    // this.moveSpeed = moveSpeed;
  }
  // 메서드
  move(): void {
    console.log(`${this.moveSpeed}만큼 속도로 이동!`);
  }
}
// 하지만 클래스 만들때 보통 인터페이스로 설계도를 먼저 만들고 구현하는 일은 보통 없음
// 라이브러리의 구현이나 복잡한 프로그래밍 할때는 존재 하긴함

/** 한가지 주의할 점!
 * 인터페이스로 정의한 필드들은 무조건 public임
 * 여기다가 constructor(public name: string, public moveSpeed: number)
 * public이 아니라 private, protected 넣으면 오류 나옴
 * 인터페이스는 무조건 public 필드만 정의할 수 있음
 */
