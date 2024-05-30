import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // useState의 초기값에 따라 state변수와 state변화 함수의 타입을 자동으로 추론해줌 - 제네릭 함수
  // 아무것도 안넣으면 기본값 undefined - 따라서 비워두면 안되는데 만약에 비워두려면 타입변수 작성 useState<string>() - 하지만 이것도 비추천임

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
        {/* <div>hi</div> 만약에 children을 사용할거면 children props를 따로 정의해줘야함 */}
      {/* </Editor> */}
    </div>
  );
}

export default App;
