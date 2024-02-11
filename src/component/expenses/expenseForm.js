import React, { useState } from 'react';

const ExpenseForm=() =>{
    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // });
const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })
    // setUserInput((prevState) =>{
    //     return {...prevState, enteredTitle:event.target.value};
    // });
}
    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // }) 
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredAmount:event.target.value};
        // });
    }
    const dateChangeHandler = (event) => {
       setenteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // }) 
    // setUserInput((prevState) =>{
    //     return {...prevState, enteredDate:event.target.value};
    // });
}
const submitHandler = (event) => {
  event.preventDefault();

  const expensedata ={
    title: enteredTitle,
    amount: enteredAmount,
    date:new Date(enteredDate),
  }
  console.log(expensedata);
  setenteredTitle('');
  setenteredAmount('');
  setenteredDate('');
}
return <form onSubmit= {submitHandler}>
    <div>
        <div>
        <label>Expense Title</label>
        <input type= "text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div>
        <label>Expense amount</label>
        <input type= "number" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div>
        <label>Expense date</label>
        <input type= "date" value={enteredTitle} onChange={dateChangeHandler}/>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </div>
</form>
}

export default ExpenseForm;