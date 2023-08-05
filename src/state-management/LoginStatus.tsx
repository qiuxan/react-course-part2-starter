import { useReducer } from "react";
import loginStatusReducer from "./reducers/loginStatusReducer";

const LoginStatus = () => {
  // const [user, setUser] = useState('');

  const [user, dispatch] = useReducer(loginStatusReducer, "");

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({ type: "LOGIN" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
