import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import SignUpForm from "./SignUpForm";

function App() {
  return (
    <div className="App">
      <header>
        {/* <SignUpForm></SignUpForm> */}
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
