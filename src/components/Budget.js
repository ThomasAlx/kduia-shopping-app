import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);

    const changeBudget = (val) => {
        dispatch({
            type: 'CHG_BUDGET',
            payload: val,
        })
    }


    return (
        <div className='alert alert-secondary'> Budget: £{
            <input name="Budget" id="Budget" type="number" onChange={event => changeBudget(event.target.value)}>
            </input>
        }
        </div>
    );
};

export default Budget;