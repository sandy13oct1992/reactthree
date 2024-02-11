 import ExpenseItem from 'component/expenses/ExpenseItem.js';

 function Expenses(props){
return (
    <div>

          {props.items.map((expense) => (
           <ExpenseItem 
           key={expense.id}
           title={props.items.title}
           amount={props.items.amount}
           date={props.items.date}
          //  location={expenses[4].location}
           ></ExpenseItem> 
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