import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import "./App.css";
import Editor from "./components/Editor";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";

type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | { type: "DELETE"; id: number };

function reducer(state: Todo[], action: Action) {
  // reducer 함수는 state, action 2개의 매개변수를 받음
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => action.id !== it.id);
    }
  }
}

export const TodoStateContext = createContext<Todo[] | null>(null);
// createContext(null); 생각해보면 todos 배열을 컴포넌트 트리에 공급할 목적으로 사용할 건데 null 타입의
// 값을 공급하는 컨텍스트로 추론되면 안됨 => 타입변수 직접 설정
export const TodoDispatchContext = createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  // 커스텀 훅
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext에 문제가 있다");
  return dispatch;
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  // useReducer는 첫번째 인수로는 reducer라는 상태 변화를 직접 처리하는 함수를 받았고 두번째로는 이런 상태의 초기값을 받음
  // setTodos가 아니라 dispatch로 변경

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
    // dispatch는 액션객체를 인수로 전달했으니까
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
          <Editor />
          {/* <div>hi</div> 만약에 children을 사용할거면 children props를 따로 정의해줘야함 */}
          {/* </Editor> */}
          <div>
            {todos.map((todos) => (
              <TodoItem key={todos.id} {...todos} />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
