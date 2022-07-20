import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {

    const saveExpenseDataHandler = (enterdExpenseData)=>{
        const exp = {
            ...enterdExpenseData,
            id: Math.random().toString()
        };
        props.onNewExpense(exp);
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
}

export default NewExpense;
