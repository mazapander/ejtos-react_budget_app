import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';
import Currency from './currency'

const Budget = () => {
    const { budget, expenses,dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState('')
    useEffect(() => {
            setNewBudget(budget);
    }, [budget]);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
            setNewBudget(event.target.value);
    };

    const handleBlur = () => {
        const budgetValue = parseFloat(newBudget);
        if (budgetValue >20000){
            setError('Presupuesto over 20000');
            return;
        }else if (budgetValue < totalExpenses) {
            setError('pesupuesto por debajo del budget');
            return;
        }else {
            setError('')
            dispatch({
                type: 'SET_BUDGET',
                payload: parseFloat(newBudget)
            });
        }
    };

    return (
<div className='alert alert-secondary'>
<span>Budget: <span>{Currency}</span>{budget}
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onBlur={handleBlur}></input>
    {error && <div style = {{color:'red'}}>{error}</div>}
</span>
</div>
    );
};
export default Budget;
