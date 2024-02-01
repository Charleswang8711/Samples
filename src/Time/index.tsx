import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function Time(): React.ReactElement {


  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    })

    return () => {
      clearInterval(intervalId)
    }
  },[])

  return (
    <div className={styles.container}>
      <p>current time: {time.toLocaleTimeString()}</p>
    </div>
  )
}