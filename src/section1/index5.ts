// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum은 특별하게 컴파일 결과 사라지지 않음
// 0이 관리자인지 일반유저인지 헷갈리는 경우가 있음 이럴때 enum type 사용

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
// 0,1,2 지정안해도 위에서부터 자동으로 0,1,2 순으로 지정됨
// 만약에 ADMIN을 10으로 할당하면 자동으로 아래로 +1 씩 증가되면서 숫자 지정됨

const uset1 = {
  name: "이정환",
  role: Role.ADMIN, // 0 <- 관리자
};
const uset2 = {
  name: "홍길동",
  role: Role.USER, // 1 <- 일반유저
};
const uset3 = {
  name: "은동혁",
  role: Role.GUEST, // 2 <- 게스트
};
