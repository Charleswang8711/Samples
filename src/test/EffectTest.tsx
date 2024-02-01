import { useEffect, useState } from "react"

export default function EffectTest(): React.ReactElement {

const [state, setState] = useState<string>('initial state')


useEffect(() => {

  console.log('setup')
  console.log(state)

  return () => {
    console.log('cleanup')
    console.log(state)
  }
},[state])

  return (
    <>
      <button onClick={() => setState('latest state')}>click me</button>
      <p>{'xxx'}</p>
    </>

  )
}