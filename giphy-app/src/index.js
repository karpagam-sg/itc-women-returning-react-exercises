import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Search from "./Components/Search";
import Saved from "./Components/Saved";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Components/Search">Search</Link>
      </li>
      <li>
        <Link to="/Components/Saved">Saved</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Components/Search" element={<Search />} />
      <Route path="/Components/Saved" element={<Saved />} />
      {/* <Route path="/*" element={<Notfound />} /> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
