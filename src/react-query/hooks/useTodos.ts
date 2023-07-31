import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";

const aPIClient = new APIClient<Todo>("/todos");
export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    // queryFn: aPIClient.getAll.bind(aPIClient), // if getAll is not an arrow function

    queryFn: aPIClient.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
