import "./App.css";
import ToDoApp from "./ToDoApp.js";

function App() {
  const name = "karpagam";
  const weather = {
    currentCity: "Cleveland",
    description: "Sunny",
    temperature: 76,
  };
  const toDos = [
    "learn React",
    "eat",
    "sleep",
    "practice React",
    "watch React Pluralsight videos",
    "practice JavaScript",
  ];
  return (
    <div>
      <header>
        <p>Welcome Karpagam</p>
        <div>
          <ToDoApp
            namedetail={name}
            weatherdetail={weather}
            toDosdetails={toDos}
          ></ToDoApp>
        </div>
      </header>
    </div>
  );
}

export default App;
