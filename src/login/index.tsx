import { ReactElement } from "react";
import styles from './styles.module.css';
import Welcome from "./Images";
import Content from "./Content";

export default function Login() : ReactElement {

  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <Welcome />
      </div>
      <div className={styles.login}>
        <Content />
      </div>
  
    </div>
  )
}