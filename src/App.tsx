import "./App.css";
import HomePage from "./routing/HomePage";
import AuthProvider from "./state-management/auth/AuthProvider";
import { LoginStatus } from "./state-management/auth";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
        <LoginStatus />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
