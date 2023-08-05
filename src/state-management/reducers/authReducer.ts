interface LoginAction {
  type: "LOGIN";
  userName: string;
}
interface LogoutAction {
  type: "LOGOUT";
}

type Actions = LoginAction | LogoutAction;
const authReducer = (userName: string, action: Actions): string => {
  switch (action.type) {
    case "LOGIN":
      return action.userName;
    case "LOGOUT":
      return "";
  }
};
export default authReducer;
