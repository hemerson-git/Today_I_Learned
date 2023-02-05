import { createContext } from "react";

const UserContext = createContext({});

export function UserProvider() {
  return <UserContext.Provider value={{}}></UserContext.Provider>;
}
