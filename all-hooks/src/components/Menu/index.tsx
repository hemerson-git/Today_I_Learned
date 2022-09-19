import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import "./styles.css";

export function Menu() {
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
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
}
