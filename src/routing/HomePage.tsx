import { TaskList } from "../state-management/tasks";
import authStore from "../state-management/auth/store";

const HomePage = () => {
  const { user } = authStore();

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
