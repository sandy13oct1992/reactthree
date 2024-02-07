import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
    console.log(props);
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
             <ExpenseDate 
             date={props.date}></ExpenseDate>
             <div>
                <h2>{props.title}</h2>
                {/* <h2>{props.location}</h2> */}
                <div>{props.amount}</div>
            </div>
           <button>Delete</button>
        </div>)
               
}

export default ExpenseItem;