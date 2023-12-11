import { useCallback } from "react"

function UseCallbackDemo() {
  
  // retain/cache the function definition between renders
  const memoizedCallback = useCallback(() => {
    console.log('memoizedCallback')
  },[])

  // react will compare each dependency with its previous value using Object.is

  return (
    <div>
      test   
    </div>
  )
}