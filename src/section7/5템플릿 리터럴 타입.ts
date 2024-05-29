/**
 * 템플릿 리터럴 타입(Template Literal Type)
 * - 보통 문자열로 여러 상황들을 표현할 때 유용하게 쓰임
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

// 일일이 "red-dog" | "red-cat"|"red-chicken"| "black-dog"| ... 쓰면 코드 길어지고 글자가 바뀌면 다 바꿔야해서 안좋음
// 이런상황에 사용하는게 템플릿 리터럴 타입임
// 사용법
// 1. 백틱 사용 하고 type 별칭 사용하면 끝
// Color의 모든 유니온 타입과 Animal의 모든 유니온 타입으로 올 수 있는 모든 타입들이 조합되어 만들어짐
type ColoredAnimal = `${Color}-${Animal}`;
