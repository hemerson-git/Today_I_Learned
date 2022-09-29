import { useEffect, useLayoutEffect } from "react";
import { GoBack } from "../components/GoBack";

export function UseLayoutEffectExample() {
  console.log("Component");

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  return (
    <div>
      <GoBack />
      <h1>Hello</h1>
    </div>
  );
}
