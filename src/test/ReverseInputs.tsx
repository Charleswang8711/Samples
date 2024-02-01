import { useState } from "react"

export function  ReverseInputs(){

  const [reverse, setReverse] = useState(false)
  
  const InputFields = (
    reverse ? 
      <>
        <InputField key="lastName" label="LastName" />
        <InputField key="firstName" label="FirstName" />
      </> : 
      <>
        <InputField key="firstName" label="FirstName" />
        <InputField key="lastName" label="LastName" />
      </>
  )
  
  const checkbox = (
      <label>
        <input 
               className="border border-gray-800 rounded-md p-1 mt-2 "
               type="checkbox" 
               checked={reverse} 
               onChange={(e) => setReverse(e.target.checked)} 
        />
        {' '}
        Reverse order
      </label>
  
  )
  
  return (
   <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col">
      {InputFields}
      {checkbox}
    </div>
   </div>
   )
  }
  
  const InputField = ({label}: {label: string}) => {
    const [value, setValue] = useState('')
   
     return (
       <label>
          {label}:{'  '}
          <input 
                 className="border border-gray-800 rounded-md p-1 mt-2"
                 type="text" 
                 value={value} 
                 onChange={(e) => setValue(e.target.value)} 
           />
       </label>
       )
  }