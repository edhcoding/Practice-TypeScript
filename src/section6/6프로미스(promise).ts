/**
 * 프로미스
 */

// 자바스크립트의 내장 클래스인 promise는 TS에서는 제네릭 클래스로 별도로 선언되어있음
// 그렇기 때문에 프로미스 생성자를 호출할 때 꺽쇠를 열고 비동기 작업의 결과 값을 타입 변수에 할당해주면
// then 메서드의 결과 값인 매개변수의 타입인 response의 타입이 타입변수의 타입으로 추론됨
// 왜 이렇게 작동하는지 모르겠으면 Promise를 cmd + 클릭 해서 확인해보면 알 수 있음
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("실패");
  }, 3000);
});

promise.then((response) => {
  // console.log(response * 10); 오류 => response는 unknown 형식입니다. (20을 넣었는데도 오류)
  // 이럴때는 typeof number 하지말고 제네릭 사용
  console.log(response * 10);
});

// reject의 타입은 any타입인데 promise의 catch메서드를 사용할때는 매개변수의 타입을 우리가 정확히 알지 못하기 때문에
// 타입좁히기 typeof를 사용해서 타입을 정해줘야함
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  // <Post> 지정안해주면 resolve는 unknown 타입이여서 점표기법으로 접근불가 오류발생
  // 앞에서 배운대로 Promise<Post> 해도 되는데 함수 이름 옆에 리턴값지정으로 : Promise<Post> 해줘도 똑같음
  // 이정환 강사님은 두번째 방법을 선호함 이유는 협업의 관점에서보면 함수의 선언만 보고도 이 함수는 Post 타입을 반환하는구나 바로 알수있기 때문임
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
