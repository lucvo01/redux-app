import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./actions";

function TodoAdd() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}>
        <button
          onClick={() => {
            dispatch(addTodo(text));
            setText("");
          }}
        >
          Add
        </button>
      </input>
    </div>
  );
}

export default TodoAdd;
