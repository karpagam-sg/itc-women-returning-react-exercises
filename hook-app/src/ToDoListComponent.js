import { useState } from "react";
import TODoComponent from "./ToDoComponent";

export default function ToDOListComponent() {
  const [todo, settodo] = useState({ name: "", completed: false });
  const [todos, settodos] = useState([]);
  function HandleSubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo({ name: "", completed: false });
  }
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          value={todo.name}
          onChange={(e) => settodo({ name: e.target.value, completed: false })}
        ></input>
        <button type="submit">Add</button>
      </form>

      {todos.map((item) => (
        <TODoComponent
          key={item.name}
          item={item}
          todos={todos}
          settodos={settodos}
        ></TODoComponent>
      ))}
    </div>
  );
}
