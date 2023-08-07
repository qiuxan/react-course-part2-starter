import { AuthActions } from "./AuthProvider";
import { Dispatch } from "react";
import React from "react";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthActions>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
