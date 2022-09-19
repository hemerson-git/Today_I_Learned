import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Home } from "../pages";
import { UseStateExample } from "../pages/useState";
import { UseEffectExample } from "../pages/useEffect";
import { UseContextExample } from "../pages/useContext";
import { UseReducerExample } from "../pages/useReducer";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/useState", element: <UseStateExample /> },
  { path: "/useEffect", element: <UseEffectExample /> },
  { path: "/useContext", element: <UseContextExample /> },
  { path: "/useReducer", element: <UseReducerExample /> },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
