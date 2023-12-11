import { ReactElement } from "react";
import styles from './styles.module.css';

export default function Welcome(): ReactElement {

  return (
    <div className={styles.container}>
      <img src='/assets/welcome.png' alt='welcome'/>
      <div className={styles.store}>
        <img src='/assets/app-store.png' alt='app' />
        <img src='/assets/google-store.png' alt='google' />
      </div>
    </div>
  );
  
}