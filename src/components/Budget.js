import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, allocations } = useContext(AppContext);

    const changeBudget = (val) => {
        const totalallocations = allocations.reduce((total, item) => {return (total += item.allocBudget);}, 0);
        if (val < totalallocations) 
        {
            window.alert('You cannot reduce the budget value lower than the spending.')
        }
        else
        {
            dispatch({
                type: 'CHG_BUDGET',
                payload: val,
            })
        }
        
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