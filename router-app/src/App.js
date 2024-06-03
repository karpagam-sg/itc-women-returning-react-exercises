import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import About from "./components/about";
import Jeopardy from "./components/jeopardy/Jeopardy";
import Home from "./components/home";
import Notfound from "./components/notfound";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/jeopardy">Jeopardy</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jeopardy" element={<Jeopardy />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
