import { useState } from "react";
import { GoBack } from "../components/GoBack";

export function UseStateExample() {
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
  }

  function handleIncrease() {
    setCount((prevState) => prevState + 1);
  }

  function handleDecrease() {
    setCount((prevState) => prevState - 1);
  }

  function handleIncrease5() {
    // Will update once

    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
  }

  function handleDecrease5() {
    // setCount(count - 1);
    // setCount(count - 1);
    // setCount(count - 1);
    // setCount(count - 1);
    // setCount(count - 1);

    setCount((prevState) => prevState - 1);
    setCount((prevState) => prevState - 1);
    setCount((prevState) => prevState - 1);
    setCount((prevState) => prevState - 1);
    setCount((prevState) => prevState - 1);
  }

  return (
    <>
      <GoBack />

      <div className="counter">{count}</div>

      <div className="buttons">
        <button onClick={handleDecrease5}>-5</button>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleReset}>0</button>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleIncrease5}>+5</button>
      </div>
    </>
  );
}
