import { useReducer } from "react";
import "./App.css";
import HomePage from "./routing/HomePage";
import AuthProvider from "./state-management/AuthProvider";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/taskContexts";
import tasksReducer from "./state-management/reducers/tasksReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />

        <LoginStatus />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
