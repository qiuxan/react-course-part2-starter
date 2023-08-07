import "./App.css";
import HomePage from "./routing/HomePage";
import { LoginStatus } from "./state-management/auth";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";
import Counter from "./state-management/counter/Counter";

function App() {
  return (
    <>
      <TasksProvider>
        <NavBar />
        <HomePage />
        <LoginStatus />
      </TasksProvider>
      <Counter />
    </>
  );
}

export default App;
