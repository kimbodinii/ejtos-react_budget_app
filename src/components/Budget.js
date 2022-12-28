import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, spent, dispatch } = useContext(AppContext);

    const handleChange = (event) => {
        const {value} = event.target

        if(value > 20000) {
            alert('Value cannot be greater than 20000')
            return
        }
        if (value < spent) {
            alert(`Value cannot be less than what has already been spent: ${spent}`)
            return
        }

        dispatch({type: 'SET_BUDGET', payload: event.target.value})
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type='number' step='10' min='0' max='20000' value={budget} onChange={handleChange} />
        </div>
    );
};

export default Budget;
