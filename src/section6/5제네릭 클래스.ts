/**
 * 제네릭 클래스
 */

// 여기서 StringList도 만들고 싶은데 이러면 골치 아픔 이미 number로 다 고정시켜놨기 때문에 => 제네릭 클래스 사용
// class NumberList {
//   constructor(private list: number[]) {}

//   push(data: number) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// 인스턴스 생성
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.push("hello");

// 추가적으로 알아야할 것
// 제네릭 클래스는 제네릭 인터페이스나 제네릭 타입변수와는 다르게 new List(["1", "2"]); 클래스의 생성자를 호출할때
// 생성자의 인수로 전달하는 값을 기준으로 타입변수의 타입을 추론함
// 그렇기 때문에 new List<number>(["1", "2"]); 앞에다가 이렇게 타입 지정 안해도됨
