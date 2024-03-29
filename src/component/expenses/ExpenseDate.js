function ExpenseDate(props){
    console.log(props);
    const month=props.date?.toLocaleString('en-us', {month: 'long'});
    const day=props.date?.toLocaleString('en-us', {day: '2-digit'});
    const year=props.date?.getFullYear();

    return <div>
    {/* <div>{props.date.toISOString()}</div> */}
    <div>{month}</div>
    <div>{day}</div>
    <div>{year}</div>
    </div>
}

export default ExpenseDate;