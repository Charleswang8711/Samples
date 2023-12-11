import { ReactElement, useEffect, useState } from "react";
import { stockDB } from "../database/stock/stock";
import { IStockItem } from "../database/stock/types";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { CssTextField } from "../components/textField";
import React from "react";

function Stock(): ReactElement {

  const [stockList, setStockList] = useState<Array<IStockItem>>(stockDB.getAll());
  const [stock, setStock] = useState<Omit<IStockItem,'id'>>({name: "", amount: 0});
  const [time, setTime] = useState<Date>(new Date());

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStock({...stock, [event.target.name]: event.target.value});
  }

  const buyHandler = () => {

    const { name, amount } = stock;
    if(name === "" || amount === 0) {
      return;
    }
    const item = stockDB.getByName(name);

    if(!item) return
    item.amount += amount;
    setStockList(stockDB.getAll());
      
  }

  const sellHandler = () => {

    const { name, amount } = stock;
    if(name === "" || amount === 0) {
      return;
    }
    const item = stockDB.getByName(name);

    if(!item) return
    item.amount -= amount;
    setStockList(stockDB.getAll());
      
  }

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => { 
      clearInterval(intervalId);
     }
  },[])


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{time.toLocaleTimeString()}</h1>
      </div>
      <div className={styles.operation}>
        <div className={styles.inputText}>
          <CssTextField id="stock-name" 
          label="Stock Name" 
          name="stockName"
          onChange={changeHandler}/>
           <CssTextField id="stock-amount" 
          label="Amount"
          name="stockAmount"
          onChange={changeHandler} />
        </div>
        <div className={styles.inputBtn}>
          <Button variant="contained" onClick={buyHandler}> buy </Button>
          <Button variant="contained" onClick={sellHandler}> sell </Button>
        </div>
       </div>
       <div>
        <List className={styles.list}>
          {stockList.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} />
              <ListItemText primary={item.amount}  />
            </ListItem>
          ))}
        </List>
       </div>
    </div>
  )
  
}

export default Stock;