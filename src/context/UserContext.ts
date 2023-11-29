import { createContext } from "react";
import User from "../models/User";

interface UserContextModel {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const defaultValues: UserContextModel = {
  user: null,
  login: () => {},
  logout: () => {},
};

const UserContext = createContext(defaultValues);

export default UserContext;
