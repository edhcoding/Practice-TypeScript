// object
// 객체 리터럴 타입
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "은동혁",
};

let user2: {
  id?: number;
  name: string;
} = {
  name: "은동혁",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "gray",
};

let config: {
  readonly apiKey: string; 
  // 읽기 전용 프로퍼티 수정 불가능함 (의도치 않은 변경으로 인해 생기는 오류 방지)
} = {
  apiKey: "MY API KEY",
};
