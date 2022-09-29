import { useEffect, useLayoutEffect, useState } from "react";
import { GoBack } from "../components/GoBack";

export function UseLayoutEffectExample() {
  console.log("Component");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, [counter]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, [counter]);

  useLayoutEffect(() => {
    for (let i = 0; i < 10000; i++) {
      console.log(i);
    }
  }, [counter]);

  return (
    <div className="container">
      <GoBack />
      <h1 className="mb-1">Hello</h1>

      <h2 className="center mb-2">{counter}</h2>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        +
      </button>
    </div>
  );
}
