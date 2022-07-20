// import { timeLog } from "console";
import React, { useState } from "react";
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [enteredTitle,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');
    
    function TitleChangeHandler(e){
        setTitle(e.target.value);
    }
    function AmountChangeHandler(e){
        setAmount(e.target.value);
    }
    function DateChangeHandler(e){
        setDate(e.target.value);
    }


    const formSubmitHandler = (e) => {
        const expensedata = {
            title: enteredTitle,
            amount: amount,
            date : new Date(date)
        }
        props.onSaveExpenseData(expensedata);
        setTitle('');
        setAmount('');
        setDate('');
        e.preventDefault();
    }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={TitleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step='0.01' value={amount} onChange={AmountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2019-01-01' max='2023-12-31' value = {date} onChange={DateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
