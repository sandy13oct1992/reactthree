const ExpenseFilter = (props) => {
    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div>
            <label>Filter By Year</label>
            <select value={props.selected} onChange={dropDownChangeHandler}>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;