import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseFilter from './ExpensesFilter';

function ExpenseItem(props) {
    const [title, setTitle]=useState(props.title);
    const [filteredYear, setFilteredYear] = useState('2022');

    const clickHandler = () => {
    setTitle('updated');
    console.log(title);
    } 
  
    
    const filterChangeHandler = selectedyear => {
     setFilteredYear(selectedyear);
    }
    // const expenseDate = new Date(2024, 1, 31);
    // const expenseTitle= "car Insurance";
    // const expenseAmount= 294.67;
    //   const month=props.date.toLocaleString('en-us', {month: 'long'});
    //   const day=props.date.toLocaleString('en-us', {day: '2-digit'});
    //   const year=props.date.getFullYear();

    

    return (<div>
             {/* <div>{props.date.toISOString()}</div> */}
             {/* <div>{month}</div>
             <div>{day}</div>
             <div>{year}</div> */}
             <ExpenseFilter selected= {filteredYear} onChangeFilter= {filterChangeHandler} />
             <ExpenseDate 
             date={props.date}></ExpenseDate>
             <div>
                <h2>{props.title}</h2>
                {/* <h2>{props.location}</h2> */}
                <div>{props.amount}</div>
            </div>
           <button onClick= {clickHandler}>Change Title</button>
        </div>)
               
}

export default ExpenseItem;