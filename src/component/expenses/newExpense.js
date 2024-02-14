import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const [isEditing, setisEditing] = useState(false);

    props.onAddExpense();
    setisEditing(false);


    const startEditingHandler = () => {
        setisEditing(true);
    }

    const stopEditHandler= () => {
        setisEditing(false);
    }

    return <div>
        (!isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>))
        (isEditing && (<ExpenseForm>
            onCancel = {stopEditHandler} 
            </ExpenseForm>)) 
        
    </div>
}

export default NewExpense;