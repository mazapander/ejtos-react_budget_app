import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './currency';
const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: <span>{Currency}</span>{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
