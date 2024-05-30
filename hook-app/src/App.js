import logo from "./logo.svg";
import "./App.css";
import ToDOListComponent from "./ToDoListComponent";
import ToDoList from "./ToDoList";
function App() {
  return (
    <div className="App">
      <header>
        {/* <ToDoList /> */}
        <ToDOListComponent></ToDOListComponent>
      </header>
    </div>
  );
}

export default App;
