import React, { useEffect } from 'react';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Link } from '@mui/material';

interface User {
  name?: string;
  password?: string;
}

const body = new URLSearchParams({
  grant_type: 'password',
  username: "zhangsan",
  password: "123456",
});

export default function Content(): React.ReactElement {

  const [user, setUser] = React.useState<User | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleLogin = () => {
    fetch('https://clare1.ngrok.io/api/v1/login', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    }).then((response) => {
      return response.json()  
    }).then((token) => {
      console.log(token)
    }).catch((error) => {
      console.log(error)
    })
  }

  
  return (
  <div className={styles.login}>
    <div className={styles.header}> Login</div>
    <div className={styles.name}>
      <TextField id="name" name='name'label = 'name' onChange={handleChange}/>
    </div>
    <div className={styles.password}>
      <TextField id="password" name='password' label='password' />
    </div>
    
   <div className={styles.footer}>
    <FormControlLabel control={<Checkbox  />} label="Remember Me" />
    <Link href='#' underline='hover' className={styles.forgotPW} >Forgot Password</Link>
   </div>

   <Button 
    className={styles.LoginBtn} 
    onClick={handleLogin} 
    color='success'
    variant="contained"> Login </Button>
  
   <div className={styles.NoAccount}>
     <p> Do not have an account</p> 
     <Link href='#' className={styles.RegHere} >Register here</Link>
    </div>
  </div>
    );
}