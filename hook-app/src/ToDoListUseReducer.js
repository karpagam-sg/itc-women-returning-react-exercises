import { useReducer, useState } from "react";

const initalstate = [];
function reducer(state, action) {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          name: action.payload.todo.name,
          completed: action.payload.todo.completed,
        },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.name !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.name === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "RESET":
      state = [];
      return state;

    default:
      return state;
  }
}

export default function ToDoListUseReducer() {
  const [todo, settodo] = useState({ name: "", completed: false });
  const [todos, dispatch] = useReducer(reducer, initalstate);

  function HandleSubmit() {
    dispatch({ type: "ADD_TODO", payload: { todo } });
    settodo({ name: "", completed: false });
  }
  function HandleDelete(name) {
    dispatch({ type: "REMOVE_TODO", payload: name });
  }
  function HandleUpdate(name) {
    dispatch({ type: "TOGGLE_TODO", payload: name });
  }
  function HandleReset() {
    dispatch({ type: "RESET", payload: "" });
  }
  return (
    <div>
      <h2>TO Do List {todos.length}</h2>
      Add New ToDo :
      <input
        type="text"
        value={todo.name}
        onChange={(e) => settodo({ name: e.target.value, completed: false })}
      ></input>
      <button onClick={HandleSubmit}>Add</button>
      <hr></hr>
      {todos.map((todo) => (
        <li key={todo.name}>
          <span
            onClick={(e) => HandleUpdate(todo.name)}
            style={{ textDecoration: todo.completed && "line-through" }}
          >
            {todo.name}
          </span>

          <span>
            <button
              // onClick={(e) => dispatch({ type: "delete", payload: todo.name })}
              onClick={(e) => HandleDelete(todo.name)}
            >
              Delete
            </button>
          </span>
        </li>
      ))}
      {todos.length > 0 && <button onClick={HandleReset}>Reset</button>}
    </div>
  );
}
