// import './App.css';
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenseItem/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Clothes",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpense= (exp)=>{
    setExpenses(function(prevExpenses){
      return [exp,...expenses];             // "..." is a spread operator it get the rest of the values of the array. Here "expenses" is the previous array that we have in the useState 
    });

  }

  return (
    <div>
      <NewExpense onAddExpense={addNewExpense}/>
      <Expenses items={expenses}></Expenses>
    </div>
  ); 
}

export default App;
