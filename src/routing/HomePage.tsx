import { useContext } from "react";
import TaskList from "../state-management/TaskList";
import AuthContext from "../state-management/contexts/authContext";

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1> user: {user}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>

      <a href="/users">Users</a>
      <TaskList />
    </>
  );
};

export default HomePage;
