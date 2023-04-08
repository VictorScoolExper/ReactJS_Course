import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{
    const [isEditing, setIsEditing] = useState(false);

    const saveExpnseDataHandler = (enteredExpenseDate) =>{
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };
        console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    const startEditingHandler = () =>{
        setIsEditing(true);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpnseDataHandler}/>}
        </div>
    );
};

export default NewExpense;