import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (event) => {
    const[dispatch, currency] = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHANGE_CURRENCY',
            payload:event.target.value
        });
    };

    return(
        <div className='alert alert-secondary'>
        <label>
            Currency:
            <select value={currency} onChange={handleCurrencyChange}>
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
        </label>
            {/* Resto del componente */}
        </div>
    );
};

export default Currency
