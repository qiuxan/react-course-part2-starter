import "./App.css";
import HomePage from "./routing/HomePage";
import AuthProvider from "./state-management/AuthProvider";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import TasksProvider from "./state-management/TasksProvider";

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
