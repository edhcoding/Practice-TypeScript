/**
 * 인덱스드 엑세스 타입(Indexed Access Type)
 * - index라는 것을 이용해서 다른 타입 내에 특정 프로퍼티의 타입을 추출하는 타입임
 * - 객체, 배열, 튜플 세가지에 모두 사용가능
 */

//객체
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

// 작성자 이름과 아이디를 붙여서 작성해야하는 함수가 있다고 가정해보자
// author: {id: number; name: string; age: number;} 이렇게 넣어줘도 문제는 없겠지만 만약에 프로퍼티를 계속 해서 추가해 나가다보면 안좋음
// 만약에 author 객체 매개변수를 받는 함수가 여러개라면 프로퍼티 추가할때마다 여기저기 또 수정해줘야함 => 인덱스드 엑세스 타입 사용해야함
// 인덱스드 엑세스 타입 => 객체 타입으로부터 특정 프로퍼티의 타입을 뽑아서 변수에 정의해주는 좋은 문법임
/** 사용법
 * 1. author 매개변수에 지정되어있는 타입은 지워준다. author: {id: number; name: string; age: number;}
 * 2. author 매개변수에 타입으로 Post 인터페이스 넣어주고 author: Post
 * 3. 객체의 괄호 표기법을 쓰듯이 대괄호 열어주고 string literal type으로 뽑고싶은 프로퍼티의 타입을 적어준다 author: Post["author"]
 * 좋은점 - 새로운 프로퍼티 수가및 수정해도 즉시 반영해줌
 * 참고 - indexed access type에서 string literal type을 index라고 부름
 * 주의 - 인덱스에 들어가는 문자열은 값이 아니라 타입이라는 점
 * 응용 - 만약에 author 프로퍼티 내에서도 id 프로퍼티만 뽑아오고 싶다 author: Post["author"]["id"]
 * 중첩으로 대괄호 사용해서 가져올 수 있다!
 */
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 콘텐츠",
  author: {
    id: 1,
    name: "은동혁",
    age: 26,
  },
};

// 배열
// interface는 객체 타입 전용이라서 타입별칭으로 바꿔주고 마지막에 [] 대괄호 추가해서 배열타입으로 만들어 줌
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 배열 타입의 모든 요소가 전부 동일한 타입을 가지고 배열의 인덱스는 숫자 타입입니다.
// 즉 number로 인덱싱 해서 배열 요소를 얻을 수 있음
// 요소의 타입 하나만 뽑아와야 하니까 대괄호 열고 number 타입 작성 PostList[number]
// 이렇게 인덱스드 엑세스 타입을 이용할 때 대괄호 안에 number 타입을 넣어주면 배열 타입으로부터 하나의 요소 타입만 가져옴
// 추가 - 인덱스로 number 타입 말고 마치 배열에 index에 접근하는 것 처럼 숫자를 넣어도 똑같음 PostList[0]
// 주의 - 위에서 0은 값이 아니라 타입임 number literal type임
// 결론 - 인덱스에 어떤 숫자값을 넣던 간에 앞에가 배열 타입이면 배열의 요소의 타입을 추출해온다
// PostList[number] === PostList[0]
const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 콘텐츠",
  author: {
    id: 1,
    name: "은동혁",
    age: 26,
  },
};

// 튜플
// 존재하지 않는 값 뽑으려고 하면 오류나옴
type Tup = [number, string, boolean];

// number
type Tup0 = Tup[0];

// string
type Tup1 = Tup[1];

// boolean
type Tup2 = Tup[2];

// string | number | boolean
type Tup3 =Tup[number]
