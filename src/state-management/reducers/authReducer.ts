interface LoginAction {
  type: "LOGIN" | "LOGOUT";
}
const authReducer = (state: string, action: LoginAction): string => {
  switch (action.type) {
    case "LOGIN":
      return "mosh.hamedani";
    case "LOGOUT":
      return "";
  }
};
export default authReducer;
