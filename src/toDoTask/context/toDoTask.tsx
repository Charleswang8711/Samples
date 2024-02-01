import { useReducer } from "react";
import { Task } from "../types";
import { TasksContext, TasksDispatchContext } from "./useTaskContext";

const initialTasks: Array<Task> = [
  {id: 1, title: 'Task 1', completed: false},
  {id: 2, title: 'Task 2', completed: true},
  {id: 3, title: 'Task 3', completed: false},
]

let nextId = initialTasks.length;

export default function ToDoTasks({children}: {children: React.ReactNode}) {
  const [tasks, dispatch] = useReducer(reducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
       {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

function reducer(tasks: Array<Task>, action: {type: string, payload: Task | number}): Array<Task> {
  switch(action.type){
    case 'ADD_TASK':
      return [...tasks, action.payload as Task]
    case 'CHANGE_TASK':
      return tasks.map(t => t.id === (action.payload as Task).id ? action.payload as Task : t)
    case 'DELETE_TASK':
      return tasks.filter(t => t.id !== action.payload)
    default:
      return tasks
  }
}