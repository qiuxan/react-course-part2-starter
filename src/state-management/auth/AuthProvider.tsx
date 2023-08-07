import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";
interface Props {
  children: ReactNode;
}

interface LoginAction {
  type: "LOGIN";
  userName: string;
}
interface LogoutAction {
  type: "LOGOUT";
}

export type AuthActions = LoginAction | LogoutAction;
const authReducer = (userName: string, action: AuthActions): string => {
  switch (action.type) {
    case "LOGIN":
      return action.userName;
    case "LOGOUT":
      return "";
  }
};

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
