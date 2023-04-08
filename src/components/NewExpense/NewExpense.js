import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{
    const saveExpnseDataHandler = (enteredExpenseDate) =>{
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };
        console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpnseDataHandler}/>
        </div>
    );
};

export default NewExpense;