import { useReducer, useState } from "react";
import AddTask from "./addTask";
import TaskList from "./taskList";
import { Task } from "./types";

const initialTasks: Array<Task> = [
  {id: 1, title: 'Task 1', completed: false},
  {id: 2, title: 'Task 2', completed: true},
  {id: 3, title: 'Task 3', completed: false},
]

let nextId = initialTasks.length;

export function ToDoTaskUseState() 
{

  const [tasks, setTasks] = useState<Array<Task>>(initialTasks)


  const onAddTask = (title: string) => {
   setTasks([...tasks,{id: nextId++, title, completed: false}])
  }

  const onChangeTask = (task: Task) => {
    setTasks(tasks.map(t => t.id === task.id ? task : t))
  }

  const onDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(t => t.id !== taskId))
  }

  return (
    <>
      <AddTask onAddTask={onAddTask}/>
      <TaskList tasks={tasks} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} />
    </>
  )
  
}

export function TodoTaskUseReducer() {

  const [tasks, dispatch] = useReducer(reducer, initialTasks)

  const onAddTask = (title: string) => {
    dispatch({type: 'ADD_TASK', payload: {id: tasks.length + 1, title, completed: false}})
  }

  const onChangeTask = (task: Task) => {
    dispatch({type: 'CHANGE_TASK', payload: task})
  }

  const onDeleteTask = (taskId: number) => {
    dispatch({type: 'DELETE_TASK', payload: taskId})
  }

  return (
    <>
      <AddTask onAddTask={onAddTask}/>
      <TaskList tasks={tasks} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} />
    </>
  )
  
}

function reducer(state: Array<Task>, action: {type: string, payload: Task | number}): Array<Task> {
  switch(action.type) {
    case 'ADD_TASK':
      return [...state, action.payload as Task]
    case 'CHANGE_TASK':
      return state.map(t => t.id === (action.payload as Task).id ? action.payload as Task : t)
    case 'DELETE_TASK':
      return state.filter(t => t.id !== action.payload as number)
    default:
      return state
  }
}