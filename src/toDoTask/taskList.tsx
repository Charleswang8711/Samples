import { ReactElement, useState } from "react";
import { Task } from "./types";

export default function TaskList(
  {tasks, onChangeTask, onDeleteTask}:{
    tasks: Array<Task>
    onChangeTask: (task: Task) => void
    onDeleteTask: (taskId: number) => void
  }
): ReactElement
{
  return(
    <ul>
      {tasks.map((task) => 
      <li key={task.id}>
       <TaskComponent
       task={task}
       onChangeTask={onChangeTask}
       onDeleteTask={onDeleteTask}
       />
        </li>
      )}
    </ul>
  )
}

function TaskComponent({task, onChangeTask, onDeleteTask}: {
  task: Task
  onChangeTask: (task: Task) => void
  onDeleteTask: (taskId: number) => void}) 
{

  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(task.title);

  const taskContent = isEditing ? 
  <>
    <input type="text" value={title} onChange={e => {
      setTitle(e.target.value)
    }} />
    <button onClick={() => {
       onChangeTask({...task, title})
       setIsEditing(false)
     }}>Save</button>
  </> :
  <>
   <span> {task.title} </span> 
   <button onClick={() => {
     setIsEditing(true)
   }}>Edit</button>  
  </>
    
  return (
    <>
      <input type="checkbox" checked={task.completed} onChange={() => onChangeTask(
        {...task, completed: !task.completed})}/>
      {taskContent}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </>
  )
  
}