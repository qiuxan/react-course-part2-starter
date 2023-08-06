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
export default authReducer;
