import { useState } from "react";

import Card from '../UI/Card'
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    //We pass it down to the ExpenseFilter component
    const filterChangeHandler = selectedYear => {
        console.log('Expense.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <div>
            <Card className="expenses">

                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses}/>

                {/*Below we will execute a dynamic(javascript) expression, 
                    {filteredExpenses.map((expense) =>(
                        <ExpenseItem
                            //The key is to solve identification problem, helps place items correctly 
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))}
                */}

            </Card>
        </div>
    );
}
export default Expenses;