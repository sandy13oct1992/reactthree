

const expenseForm=() =>{
const titleChangeHandler = (event) => {
    console.log(event.target.value);
}
return <form>
    <div>
        <div>
        <label>Expense Title</label>
        <input type= "text" onChange='titleChangeHandler'/>
        </div>
        <div>
        <label>Expense amount</label>
        <input type= "number"/>
        </div>
        <div>
        <label>Expense date</label>
        <input type= "date"/>
        </div>
        <div>
            <button>Add Expenses</button>
        </div>
    </div>
</form>
}

export default expenseForm;