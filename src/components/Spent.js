import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spent = () => {
    const { allocations, Budget } = useContext(AppContext);
    const remainder = Budget - allocations.reduce((total, item) => {return (total += item.allocBudget);}, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{remainder}</span>
        </div>
    );
};

export default Spent;
