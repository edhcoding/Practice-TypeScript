// 타입 별칭 - 타입을 마치 변수처럼 정의해서 사용할 수 있음
// 이러한 user가 많아질수록 타입 지정 코드 또한 많아짐
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "은동혁",
  nickname: "동동이",
  birth: "1999.04.10",
  bio: "안녕하세요",
  location: "한국",
};

let user2: User = {
  id: 2,
  name: "푸바오",
  nickname: "바오바오",
  birth: "1999.04.10",
  bio: "안녕하세요",
  location: "중국",
};

// 인덱스 시그니처 - 객체 타입의 정의 더 유연하게 도와줌
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
