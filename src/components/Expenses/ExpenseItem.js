import { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

  const[title,setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');

  const clickHandler = ()=>{
    setTitle('Updated');
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
