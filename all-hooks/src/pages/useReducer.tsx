import { useReducer } from "react";
import { GoBack } from "../components/GoBack";

interface stateProps {
  counter: number;
  clicks: number;
}

interface actionProps {
  type: "reset" | "increment" | "decrement";
}

function reducer(state: stateProps, action: actionProps) {
  // Action is the value incoming from the dispatch function
  // state is the value of the current state

  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        clicks: 0,
      };

    case "increment":
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1,
      };

    case "decrement":
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1,
      };

    default:
      return state;
  }
}

const initialValue = {
  clicks: 0,
  counter: 0,
};

export function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  function handleReset() {
    // dispatch function fires the reducer
    dispatch({ type: "reset" });
  }

  function handleIncrease() {
    dispatch({ type: "increment" });
  }

  function handleDecrease() {
    dispatch({ type: "decrement" });
  }

  return (
    <>
      <GoBack />

      <div className="counter">{state.counter}</div>
      <div className="counter">Cliques: {state.clicks}</div>

      <div className="buttons">
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleReset}>0</button>
        <button onClick={handleIncrease}>+</button>
      </div>
    </>
  );
}
