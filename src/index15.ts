/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 * ex) string, number는 교집합이 없음 수학에서는 이런 걸 서로소 집합 이라고 함
 * string | number 이런걸 서로소 유니온 타입이라고 부름
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin => {name}님 {kickCount}명 강퇴했습니다.
// Member => {name}님 현재까지 {point}모았습니다.
// Guest => {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  // 더쉽게
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    }
  }

  // if (user.tag === "ADMIN") {
  //   // 원래 조건문이 "kickCount" in user 이였는데 이제는 user.tag === "ADMIN"이라고 작성하면 직관적임
  //   // Admin 타입
  //   console.log(`${user.name}님 ${user.kickCount}명 강퇴했습니다.`);
  // } else if ("point" in user) {
  //   // Member 타입
  //   console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  // } else if ("visitCount" in user) {
  //   // Guest 타입
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  // }
  // 잘 만들었는데 만약 이걸 다른사람이 보거나 주석도 없다면 이 조건문 내부는 Admin이구나 이걸 아무도 모름
  // 결론적으로 코드를 이렇게 작성하면 직관적이지 않음 => 이럴때 서로소 유니온 타입을 사용하면 됨
  // 프로퍼티에 tag라는 프로퍼티를 추가할거임 value로는 string 타입이 아니라 string literal type 으로 만들어줌 전부 대문자 사용
}

/**
 * 복습겸 한가지 더 사례
 * 비동기 작업 처리 결과를 처리하는 객체
 */

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;
// {
//   // state: string; 이거 보다는
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

// 로딩중 => 콘솔에 로딩중 출력
// 실패 => 실패: 에러메시지를 출력
// 성공 => 성공: 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩중");
      break;
    }
    case "FAILED": {
      // task.error?.message 우리는 case를 정확히 FAILED일때로 했는데 error?.에서 물음표를 빼면 오류가 나옴
      // task에 마우스 올려보면 task 일때도 AsyncTask로 나옴 타입이 좁혀지지 않았음
      // task.state가 FAILED라 하더라도 error 프로퍼티는 선택적 프로퍼티로 정의 되어있기 때문에
      // task에 에러가 있는지 없는지 확실히 모름 쉽게 말하면 좁혀질 타입 자체가 없음 타입이 하나밖에 없으니까
      // 어쩔수없이 optional chaining 써주던가 non,null단언을 사용해야하는데 이러면 안전한 코드가 아님
      // 이럴때는 AsyncTask를 3개의 타입으로 분리해서 서로소 유니온 타입으로 만들어 줘야함
      console.log(`에러 발생: ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공: ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 ~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~",
  },
};
