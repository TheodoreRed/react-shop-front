import { ReactNode, useState } from "react";
import UserContext from "./UserContext";
import User from "../models/User";

interface Props {
  children: ReactNode;
}

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>({
    _id: "647a5a2dcbd8b27457c3d0ef",
    displayName: "Mitch Cuckovich",
    darkTheme: true,
  });

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
