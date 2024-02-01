import { createContext, useContext } from "react";
import { Task } from "../types";


export const TasksContext = createContext<Array<Task>>([])
export const TasksDispatchContext = createContext<React.Dispatch<any>>(() => { })

export const useTasks = () => {
   return useContext(TasksContext)
}

export const useDispatch = () => {
  return useContext(TasksDispatchContext)
}
