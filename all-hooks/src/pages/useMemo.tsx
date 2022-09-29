import { useState, useMemo } from "react";
import { GoBack } from "../components/GoBack";

export function UseMemoExample() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const total = useMemo(() => {
    // it won't run on the input changes
    console.log("useMemo ran successfully");
    return counter + 1234123 * 12341;
  }, [counter]);

  function handleIncrease() {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <>
      <GoBack />
      <h1>{counter}</h1>
      <h4>{total}</h4>
      <button onClick={handleIncrease}>+</button>

      <br />
      <br />
      <span>{name}</span>
      <input
        type="text"
        id="name"
        autoComplete="none"
        placeholder="Type your Name"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
