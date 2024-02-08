import React, { useState } from 'react';

const expenseForm=() =>{
    // const [enteredTitle, setenteredTitle] = useState('');
    // const [enteredAmount, setenteredAmount] = useState('');
    // const [enteredDate, setenteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:'',
    });
const titleChangeHandler = (event) => {
    // setenteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })
    setUserInput((prevState) =>{
        return {...prevState, enteredTitle:event.target.value};
    });
}
    const amountChangeHandler = (event) => {
        // setenteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // }) 
        setUserInput((prevState) =>{
            return {...prevState, enteredAmount:event.target.value};
        });
    }
    const dateChangeHandler = (event) => {
    //    setenteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // }) 
    setUserInput((prevState) =>{
        return {...prevState, enteredDate:event.target.value};
    });
}
return <form>
    <div>
        <div>
        <label>Expense Title</label>
        <input type= "text" onChange={titleChangeHandler}/>
        </div>
        <div>
        <label>Expense amount</label>
        <input type= "number" onChange={amountChangeHandler}/>
        </div>
        <div>
        <label>Expense date</label>
        <input type= "date" onChange={dateChangeHandler}/>
        </div>
        <div>
            <button>Add Expenses</button>
        </div>
    </div>
</form>
}

export default expenseForm;