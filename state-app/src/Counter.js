import { useState, useEffect } from "react";
import "./Counter.css";

export default function Counter({ countValue = 0 }) {
  const [count, setCount] = useState(countValue);
  const [textColor, setTextColor] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount !== null) {
      setCount(Number(storedCount));
    }
  }, []);

  useEffect(() => {
    if (count >= 10) {
      setTextColor("redtext");
    } else {
      setTextColor("normaltext");
    }
  }, [count]);

  function incrementCount() {
    setShowButton(true);
    if (count < 20) {
      const newCount = count + 1;
      setCount(newCount);
      localStorage.setItem("count", newCount);
    }
  }
  function decrementCount() {
    setShowButton(true);
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      localStorage.setItem("count", newCount);
    }
  }
  function resetButton() {
    setCount(countValue);
    localStorage.setItem("count", countValue);
  }

  return (
    <div>
      <h1>
        Count Value is:<span className={textColor}>{count}</span>
      </h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <br></br>
      {showButton && <button onClick={resetButton}>Reset</button>}
    </div>
  );
}
