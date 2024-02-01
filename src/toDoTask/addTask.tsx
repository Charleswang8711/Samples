import { ReactElement, useState } from "react";

export default function AddTask({onAddTask}: {onAddTask: (task: string) => void}): ReactElement
{
  const [text, setText] = useState<string>('')


  return(
  <>
    <input placeholder="Add task" 
           value={text}
           onChange={value => setText(value.target.value)}
    />
    <button onClick={
      () => {
        onAddTask(text)
        setText('')
      }
    }>Add</button>
  </>
  )
  
}