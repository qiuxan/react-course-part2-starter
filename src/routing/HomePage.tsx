import { TaskList } from "../state-management/tasks";
import authStore from "../state-management/auth/store";
import { Link } from "react-router-dom";
import { error } from "console";

const HomePage = () => {
  const { user } = authStore();

  return (
    <>
      <h1> user: {user}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>

      <Link to="/users">Users</Link>
    </>
  );
};

export default HomePage;
