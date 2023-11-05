import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { allocations, Budget } = useContext(AppContext);
    const remainder = Budget - allocations.reduce((total, item) => {return (total += item.allocBudget);}, 0);

    return (
        <div className='alert alert-success'>
            <span>Remaining: £{remainder}</span>
        </div>
    );
};

export default Remaining;
