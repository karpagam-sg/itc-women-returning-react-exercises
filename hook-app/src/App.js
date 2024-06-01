import "./App.css";
import { createContext } from "react";
// import ToDOListComponent from "./ToDoListComponent";
// import ToDoList from "./ToDoList";
//import ComponentA from "./components/ComponentA";
//import ToDoListUseReducer from "./ToDoListUseReducer";
//import MemoHook from "./MemoHook";
import Bootstrap from "./ReactBootstrap";

export const Context = createContext();

const name = "karpagam";

function App() {
  return (
    <div className="App">
      <header>
        {/* <ToDoList /> */}
        {/* <ToDOListComponent></ToDOListComponent> */}
        {/* <Context.Provider value={name}>
          <ComponentA></ComponentA>
        </Context.Provider> */}
        {/* <ToDoListUseReducer></ToDoListUseReducer> */}
        {/* <MemoHook></MemoHook> */}
        <Bootstrap></Bootstrap>
      </header>
    </div>
  );
}

export default App;
