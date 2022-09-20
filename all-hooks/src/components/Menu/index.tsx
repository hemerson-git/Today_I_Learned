import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Menu() {
  const { pathname } = window.location;

  useEffect(() => {
    const link = document.querySelector(`a[href="${pathname}"]`);
    link?.classList.add("active");
    link?.setAttribute("disabled", "disabled");
  }, [pathname]);

  return (
    <header>
      <NavigationMenu.Root>
        <NavigationMenu.List className="menu">
          <NavigationMenu.Item>
            <Link to="/">Home</Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link to="/useState">useState</Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link to="/useEffect">useEffect</Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link to="/useContext">useContext</Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link to="/useReducer">useReducer</Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link to="/useCallback">useCallback</Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link to="/useMemo">useMemo</Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
}
