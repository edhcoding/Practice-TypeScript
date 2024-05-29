/**
 * 맵드 타입 기반 유틸리티 타입
 * - Partial<T>, Required<T>, Readonly<T>
 */

/**
 * Partial<T>
 * - 부분적인, 일부분의
 * - 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 이번에는 Partial<T> 타입을 구현해 볼거임
type Partial<T> = {
  [key in keyof T]?: T[key];
};

// 예를 들어서 임시저장을 하려 할때는 전부 다 안적어도 되는 상황임
// 그냥 타입을 Post로 하면 안적은 부분들이 있기에 오류나는데
// Partial<T>을 사용하면 타입변수에 들어가는 객체를 선택적 프로퍼티로 만들어줌
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안..",
};

/**
 * Required<T>
 * - 필수의, 필수적인
 * - 특정 객체의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입임 (Partial과 반대)
 */

// 구현
// 선택적 프로퍼티는 ? 붙여야하는데 필수 프로퍼티는 ? 를 빼면 되는거기 때문에 -?(마이너스 물음표)
type Required<T> = {
  [key in keyof T]-?: T[key];
};

// thumbnailURL은 선택적 프로퍼티여서 존재하지 않아도 오류가 없는데 필수 프로퍼티로 바꿔줄거임
const withThumbnailPost: Required<Post> = {
  title: "배고프다",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

/**
 * Readonly<T>
 * - 읽기전용, 수정불가
 * - 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

// 구현
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "배불러",
  tags: [],
  content: "",
};

// readonlyPost.titel = ""; 수정불가
