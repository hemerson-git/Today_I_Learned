import { useRef, useState } from "react";
import { GoBack } from "../components/GoBack";
import "./styles/useRef.css";

export function UseRefExample() {
  // Initial Value of the Ref
  const number = useRef(0);
  const [name, setName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  console.log("Rendered !!");

  function handleRandomize() {
    const newNumber = Math.floor(Math.random() * 10);
    number.current = newNumber;
  }

  function handlePrintValue(value: any) {
    alert(value);
  }

  function handlePrintAndFocus() {
    if (inputRef.current) {
      alert(inputRef.current.value);
      inputRef.current.focus();
    }
  }

  return (
    <>
      <GoBack />

      {/* Will Render on each char typed */}
      <section className="d-flex flex-col mb-2 justify-center items-center">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Type your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={() => handlePrintValue(name)}>Print Name</button>
      </section>

      {/* Won't render on each char typed */}
      <section className="d-flex flex-col mb-2 justify-center items-center">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Type your E-mail"
          ref={inputRef}
        />

        <button onClick={handlePrintAndFocus}>Print E-mail</button>
      </section>

      <section className="buttons">
        <button type="button" onClick={handleRandomize}>
          Randomize Value
        </button>

        <button type="button" onClick={() => handlePrintValue(number.current)}>
          Print Value
        </button>
      </section>
    </>
  );
}
