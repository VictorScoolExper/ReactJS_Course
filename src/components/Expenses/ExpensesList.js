
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props =>{

    let noExpenseTag = <h2 className='expenses-list__fallback'>Found no expenses</h2>;
    let tinaryExpresion = props.items.length === 0 ? (noExpenseTag) : (
        props.items.map((expense) => (
            <ExpenseItem
                //The key is to solve identification problem, helps place items correctly 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    );

    return (
        <ul className='expenses-list'>
            {tinaryExpresion}
        </ul>
    );
    
};

export default ExpensesList;

