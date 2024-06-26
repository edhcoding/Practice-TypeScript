import { useState } from "react";
import { useTodoDispatch } from "../App";

interface Props {}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 여기서 매개변수 e에 타입정의 해줄때 e: any 하거나 e: { target: { value: string } } 별로 좋지않음
    // react에서는 기본적인 기능에 대한 타입정보는 미리 제공되기 때문에 onChange={(e)=>{setText(e.target.value)}}
    // 여기서 매개변수 e에 마우스 가져다 놓으면 e: React.ChangeEvent<HTMLInputElement> 이벤트 객체의 타입이 바로나옴
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
