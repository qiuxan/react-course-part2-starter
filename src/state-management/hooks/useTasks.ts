import { useContext } from "react";
import TasksContext from "../contexts/taskContexts";

const useTasks = () => useContext(TasksContext);
export default useTasks;
