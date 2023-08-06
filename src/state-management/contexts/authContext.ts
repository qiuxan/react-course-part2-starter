import { Dispatch } from "react";
import { AuthActions } from "../reducers/authReducer";
import React from "react";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthActions>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
