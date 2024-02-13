 import { useState } from 'react';
 import ExpenseItem from './ExpenseItem'
 import ExpenseFilter from './ExpensesFilter';

 function Expenses(props){
    console.log(props);

    const [filteredyear, setFilteredYear] = useState('2020')

   const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
   }

   const filteredExpense = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredyear;
   });

return (
    <div>
        <ExpenseFilter 
        selected={filteredyear}
        onChangeFilter={filterChangeHandler}
         />

         {filteredExpense.length===1 ? (
            <p>Only Single Expense Here</p>
         ):(
          filteredExpense.map((expense) => (
           <ExpenseItem 
           key={expense.id}
           title={expense.title}
           amount={expense.amount}
           date={expense.date}
          //  location={expenses[4].location}
           ></ExpenseItem> 
          )
          ))}
{/* <ExpenseItem 
           title={props.item[1].title}
           amount={props.item[1].amount}
           date={props.items[1].date}
          //  location={expenses[4].location}
           ></ExpenseItem> 

<ExpenseItem 
           title={props.item[2].title}
           amount={props.item[2].amount}
           date={props.items[2].date}
          //  location={expenses[4].location}
           ></ExpenseItem> 

<ExpenseItem 
           title={props.item[3].title}
           amount={props.item[3].amount}
           date={props.items[3].date}
          //  location={expenses[4].location}
           ></ExpenseItem>  */}
           
          </div>

)
    
           
 } 
export default Expenses;