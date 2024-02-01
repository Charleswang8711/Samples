import { useState } from "react"

export default function EffectTest(): React.ReactElement {

const [count, setCount] = useState<number>(0)

const onClick = () => {
  setCount(count+1)

  setTimeout(() => {
    setCount(count+1)
  });

}

console.log('render',count)

  return (
    <>
      <button onClick={onClick}>click me</button>
      <p>{count}</p>
    </>

  )
}