import { useState } from "react";
import "./Counter.css";

export default function Counter({ countValue }) {
  const [count, setCount] = useState(countValue);
  const [textColor, setTextColor] = useState(null);
  const [showButton, setShowButton] = useState(false);
  if (countValue == "" || countValue == null) {
    countValue = 0;
  }
  function incrementCount() {
    setShowButton(true);
    if (count < 20) {
      if (count >= 10) {
        setTextColor("redtext");
      } else {
        setTextColor("noramltext");
      }
      setCount(count + 1);
    }
  }
  function decrementCount() {
    setShowButton(true);
    if (count > 0) {
      if (count >= 10) {
        setTextColor("redtext");
      } else {
        setTextColor("noramltext");
      }
      setCount(count - 1);
    }
  }
  function resetButton() {
    setCount(countValue);
  }

  return (
    <div>
      <h1>
        Count Value is:<span className={textColor}>{count}</span>
      </h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <br></br>
      {showButton && <button onClick={resetButton}>Reset Button</button>}
    </div>
  );
}
