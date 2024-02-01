import { ClassNames } from "@emotion/react"
import { useState } from "react"

const contactList: Array<{id: string, name:string}> = [
  {id: '1', name: 'John'},
  {id: '2', name: 'Bob'},
  {id: '3', name: 'Smith'},
]
export default function ReverseList() 
{
  const [reverse, setReverse] = useState(false)
  const checkbox = (
    <label>
      <input type="checkbox" checked={reverse} onChange={(e) => setReverse(e.target.checked)} />
      {' '}
      Reverse order
    </label>
    
  )

 const list = [...contactList]
 if(reverse) list.reverse()

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-start">
          <ul>
          {list.map((contact,index) => (
              <li key={contact.id}>
                <Contact name={contact.name} />
              </li>
          ))}
          </ul>
      {checkbox}
      </div>
    </div>
   
  )

  
}

const Contact = ({name}: {name:string}) => {
  const [show, setShow] = useState(false);

  const email = (
    <>
     <span>{`${name}@mail.com`}</span>
     <br />
    </>
   
  )

  return (
    <>
      {show && email}
      <button className="border border-gray-800 rounded-md p-1 mt-2 " onClick={() => {setShow(!show)}}>
       {!show ? 'show' : 'hide'} {`${name}\`s email`}
      </button>
    </>
  )
}