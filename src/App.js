import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NewExpense from './component/expenses/NewExpense';
import Expenses from './component/expenses/Expenses';

const Dummy_Expenses=[
  {title: 'car Insurance', amount:294.67, date: new Date(2024,1,29)},
  {title: 'car Insurance', amount:294.67, date: new Date(2024,1,29)},
  {title: 'car Insurance', amount:294.67, date: new Date(2024,1,29)},
  {title: 'car Insurance', amount:294.67, date: new Date(2024,1,29)},
];

const App = () => {
    const [expenses, setExpenses] = useState(Dummy_Expenses);

    const addExpenseHandler = expense =>{
      setExpenses((preExpenses) => {
        return [expense, ...preExpenses]
      });
    }
    const DeleteHandler= function(){

    }
  
    return (
         <div>
            <div>
              <NewExpense></NewExpense>
            </div>
           
           <div>
            <Expenses items={expenses}></Expenses>
           </div>

          {/* //   title={expenses[0].title}
          //   amount={expenses[0].amount}
          //   date={expenses[0].date}
          //   // location={expenses[0].location}
          //   </ExpenseItem> */}
  
          {/* //  <ExpenseItem 
          //  title={expenses[1].title}
          //  amount={expenses[1].amount}
          //  date={expenses[1].date}
          // //  location={expenses[1].location}
          //  ></ExpenseItem> */}
  
          {/* //  <ExpenseItem 
          //  title={expenses[2].title}
          //  amount={expenses[2].amount}
          //  date={expenses[2].date}
          // //  location={expenses[2].location}
          //  ></ExpenseItem>
  
          //  <ExpenseItem 
          //  title={expenses[3].title}
          //  amount={expenses[3].amount}
          //  date={expenses[3].date}
          // //  location={expenses[4].location}
          //  ></ExpenseItem> */}
           
            
  
  </div>
  );
}

export default App;
