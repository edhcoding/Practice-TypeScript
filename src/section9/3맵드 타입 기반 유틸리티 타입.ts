/**
 * 맵드 타입 기반 유틸리티 타입2
 * - Pick<T, K>, Omit<T, K>, Record<K, V>
 */

/**
 * Pick<T, K>
 * - 뽑다, 고르다
 * - 객체 타입으로부터 특정 타입을 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 구현
// [key in K]: T[key]; 이렇게 작성하면 오류 => 'K' 형식은 'string | number | symbol' 형식에 할당할 수 없습니다.
// 이전에 맵드 타입에서 in 연산자 우측에는 key가 뭐가 있는지 표현하기 위해서 string literal로 만든 유니온 타입만 들어올 수 있다고함
// 타입변수 K에는 제한을 안했기 때문에 아무거나 다 들어올 수 있음
// 제한: Pick<T, K> => Pick<T, K extends keyof T>
type Pick<T, K extends keyof T> = {
  // K extends "title" | "tags" | "content" | "thumbnailURL"
  // "title" | "content" extends "title" | "tags" | "content" | "thumbnailURL" => 이 조건식은 참이 됨(왼쪽은 오른쪽의 서브타입)
  [key in K]: T[key];
};

// 옛날에는 태그, 썸네일 기능 없다고 가정
// Pick<Post, "title" | "content"> Post 타입으로부터 title, content 프로퍼티만 있는 객체 타입으로 새로운 타입을 정의해줌
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 * - 생략하다, 빼다
 * - 객체 타입으로부터 특정 타입을 제거하는 타입 (Pick의 반대 기능)
 */

// 구현
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T - Post, K - "title"
// Pick<Post, Exclude<keyof Post, "title">>
// Pick<Post, Exclude<"title" | "tags" | "content" | "thumbnailURL", "title">>
// 여기서 Exclude 타입은 타입변수를 2개를 받고 앞에 전달한 타입변수에서 뒤에 전달한 타입변수를 제거한 타입을 반환하는 타입임
// Pick<Post, "tags" | "content" | "thumbnailURL">>

// Pick<Post, "tags" | "content" | "thumbnailURL"> 이렇게 해도 되지만 건져낼 프로퍼티의 수가 많아질수록 코드가 길어짐
// 이때 Omit을 사용 => Omit<Post, "title">
const noTitlePost: Omit<Post, "title"> = {
  tags: [],
  content: "",
  thumbnailURL: "",
};

/**
 * Record<K, V>
 * - Record 타입은 객체 타입을 새롭게 정의할 때 인덱스 시그니쳐 처럼 유연하지만, 그것보다는 조금 더 제한적인 객체 타입을 정의할 때 사용함
 * - 동일한 패턴을 가지는 객체 타입을 쉽게 정의할 수 있다.
 * - 실무에서 자주 쓰이는 타입
 */

// 이렇게 작성하면 중복코드가 너무 심함 => 이럴때 Record 타입 사용
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

// 구현
// K extends keyof any =>
// 이게 무슨 타입이 될지는 모르겠는데 적어도 타입변수 K에 들어오는 타입은 어떤 객체의 타입을 추출해놓은 유니온 타입이야
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

// Record 타입은 객체 타입을 만들어주는 유틸리티 타입임
// 첫번째 타입 변수로는 객체의 프로퍼티 key를 유니온 타입으로 받고
// 두번째 타입 변수로는 key들의 value 타입을 받음 (value 추가 가능)
// 위랑 같은 뜻임
type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
