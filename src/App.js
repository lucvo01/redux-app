import React from "react";
import Counter from "./features/counter/Counter";
import MultiCounter from "./features/multiCounter/MultiCounter";
import Todo from "./features/todo/Todo";

function App() {
  return (
    <div className="App">
      Intro to Redux
      {/* <Counter /> */}
      {/* <MultiCounter /> */}
      <Todo />
    </div>
  );
}

export default App;
