import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    //We pass it down to the ExpenseFilter component
    const filterChangeHandler = selectedYear =>{
        console.log('Expense.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear)
    }

    return (
        <div>
            <Card className="expenses">
                
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                ></ExpenseItem>
            </Card>
        </div>
    );
}
export default Expenses;