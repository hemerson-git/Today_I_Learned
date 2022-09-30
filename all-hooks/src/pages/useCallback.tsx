import { ButtonHTMLAttributes, useCallback, useState } from "react";
import { GoBack } from "../components/GoBack";

const functionCounter = new Set();
const functionCounter2 = new Set();

export function UseCallbackExample() {
  const [counter, setCounter] = useState(0);

  function handleIncrease() {
    setCounter((prevState) => prevState + 1);
  }

  const handleDecrease = useCallback(() => {
    setCounter((prevState) => prevState - 1);
  }, []);

  functionCounter.add(handleIncrease);
  functionCounter2.add(handleDecrease);

  console.log(`There are ${functionCounter.size} increase functions declared`);
  console.log(`There are ${functionCounter2.size} decrease functions declared`);

  return (
    <>
      <GoBack />

      <h2 className="counter">{counter}</h2>

      <h3>{functionCounter.size} Increase Functions</h3>
      <h3>{functionCounter2.size} Decrease Functions (Memoized)</h3>

      <Button onClick={handleIncrease}>+</Button>
      <Button onClick={handleDecrease}>&minus;</Button>
    </>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ ...rest }: ButtonProps) {
  return <button {...rest} />;
}
